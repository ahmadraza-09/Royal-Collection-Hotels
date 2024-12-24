import React, { useState } from 'react';
import '../css/packages.css';
import data from '../data/packagedata';
import BackImg from '../assets/icons/back.png';


const Packages = () => {
    const [selectedState, setSelectedState] = useState(data[0]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleStateChange = (e) => {
        const state = e.target.value;
        const stateData = data.find(item => item.state === state);
        setSelectedState(stateData);
        setSelectedPackage(null);
    };

    const handlePackageClick = (pkg) => {
        setSelectedPackage(pkg);
    };

    const handleBackToPackages = () => {
        setSelectedPackage(null);
    };

    const handleImageClick = (image) => {
        setModalImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalImage('');
    };

    return (
        <div className="packages-container">
            <h1>Tours & Travel Packages</h1>
            <div className="header">
                <button
                    className="back-button"
                    onClick={handleBackToPackages}
                    style={{ display: selectedPackage ? 'block' : 'none' }}
                >
                    <img src={BackImg} alt="" />
                </button>
                {!selectedPackage && (
                    <div className="header-content">
                        <h2>{selectedState.state}</h2>
                        <select
                            className="state-dropdown-right"
                            onChange={handleStateChange}
                            value={selectedState.state}
                            aria-label="Select State"
                        >
                            {data.map((stateData, index) => (
                                <option key={index} value={stateData.state}>
                                    {stateData.state}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {selectedState && !selectedPackage && (
                <div className="state-packages">
                    <div className="packages-list">
                        {selectedState.packages.map((pkg, index) => (
                            <div key={index} className={`package-card package-card${index + 1}`} onClick={() => handlePackageClick(pkg)}>
                                <img src={pkg.image} alt="" />
                                <h3>{pkg.name}</h3>
                                <div className="package-icons">
                                    {pkg.icons.map((icon, i) => (
                                        <div key={i} className="package-icon">
                                            <img src={icon.iconImage} alt="" />
                                            <span>{icon.iconName}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="package-inclusive">
                                    {pkg.packageInclusive && pkg.packageInclusive.length > 0 ? (
                                        pkg.packageInclusive.slice(0, 3).map((item, i) => (
                                            <span key={i}><i className="fa-solid fa-circle-check"></i> {item}</span>
                                        ))
                                    ) : (
                                        <span>No inclusives available</span>
                                    )}
                                    {pkg.packageInclusive && pkg.packageInclusive.length > 3 && (
                                        <button className="see-more-button">See More</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedPackage && (
                <div className="package-details">
                    <img src={selectedPackage.image} alt="" />
                    <h1>{selectedPackage.name}</h1>
                    <p>{selectedPackage.description}</p>
                    <div className="package-details-icons">
                        {selectedPackage.icons.map((icon, i) => (
                            <div key={i} className="package-details-icon">
                                <img src={icon.iconImage} alt="" />
                                <span>{icon.iconName}</span>
                            </div>
                        ))}
                    </div>
                    {selectedPackage.packageDuration &&
                        <>
                            <h3>PACKAGE DURATION</h3>
                            <div className="package-details-duration">

                                <span>{selectedPackage.packageDuration}</span>

                            </div>
                        </>
                    }
                    <br />
                    <h3>INCLUSIVE</h3>
                    <div className="package-inclusive">
                        {selectedPackage.packageInclusive && selectedPackage.packageInclusive.length > 0 ? (
                            selectedPackage.packageInclusive.map((item, i) => (
                                <span key={i}><i className="fa-solid fa-circle-check"></i> {item}</span>
                            ))
                        ) : (
                            <span>No inclusives available</span>
                        )}
                    </div>
                    <br />
                    {selectedPackage.packageExclusive &&
                        <>
                            <h3>EXCLUSIVE</h3>
                            <div className="package-inclusive">
                                {selectedPackage.packageExclusive && selectedPackage.packageExclusive.length > 0 ? (
                                    selectedPackage.packageExclusive.map((item, i) => (
                                        <span key={i}><i className="fa-solid fa-circle-xmark"></i> {item}</span>
                                    ))
                                ) : (
                                    <span>No exclusives available</span>
                                )}
                            </div>
                        </>
                    }

                    <br />
                    <h3>PACKAGE GALLERY</h3>
                    <div className="package-details-gallery">
                        {selectedPackage.packageGallery && selectedPackage.packageGallery.length > 0 ? (
                            selectedPackage.packageGallery.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    onClick={() => handleImageClick(image)}
                                    className="gallery-image"
                                />
                            ))
                        ) : (
                            <p>No gallery images available</p>
                        )}
                    </div>
                    <br />
                    {selectedPackage.packageDestinations &&

                        <>
                            <h3>PACKAGE DESTINATIONS</h3>
                            <div className="package-details-destinations">
                                {selectedPackage.packageDestinations.map((destination, index) => (
                                    <div key={index} className="package-details-destinations-container">
                                        <h4>&#x25cf; {destination.name}</h4>
                                        <span><i class="fa-solid fa-hotel"></i>- {destination.hotelName} or Similar</span>
                                        <span><i class="fa-solid fa-utensils"></i>- {destination.food}</span>
                                        <span><i class="fa-solid fa-clock-rotate-left"></i>- {destination.duration}</span>
                                        <ul>
                                            <span>Description</span>
                                            {destination.descriptionLists.map((description, index) => (
                                                <>
                                                    <li key={index}>{description}</li>
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </div>
            )}

            {showModal && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img src={modalImage} alt="Full-Screen View" className="modal-image" />
                        <button className="modal-close" onClick={handleCloseModal}><i className="fa-regular fa-circle-xmark"></i></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Packages;
