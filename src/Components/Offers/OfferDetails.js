import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import RegistarForm from './RegistarForm';

const OfferDetails = () => {
    const {id} = useParams();
    const [offer, setOffer] = useState({});
    useEffect(() => {
        fetch(`https://gentle-earth-96369.herokuapp.com/offer/${id}`)
        .then(res => res.json())
        .then(data => setOffer(data))
        
    }, [id])

    
    



    const styles = {    
        backgroundImage: `url(${offer.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '50vh'
};
    return (
        <div className="offer-section">
             <div style={styles} className="place-img">
             <div className="place-text ">
             <h1 className="banner-title text-center">{offer.name}</h1>       
             </div>
             </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="card details-card my-3 my-bg" >
                    <div className="">
                        <h5 className="card-title-1 my-color">{offer.title}</h5>
                        <div className="d-flex box justify-content-between align-items-center">
                        <h6 className="card-subtitle-1 mb-2 text-white">A wonderful serenity has taken possession <br />  of my entire soul</h6>
                        <div className="rounded-circle text-center  text-white offer-details-1">
                            <p className="m-2 mb-0"><strong>${offer.price}</strong></p>
                            <small className="">per person</small>
                        </div>
                        </div>
                       
                        <div className="offer-details text-center d-flex     justify-content-around">
                        <div>
                        <i className="fas fa-clock"></i>
                        <p><strong>2 days</strong></p>
                        </div>
                        <div>
                        <i className="fas fa-users"></i>
                        <p><strong>6 People</strong></p>
                        </div>
                       <div>
                       <i className="fas fa-user-plus"></i>
                        <p><strong>18</strong></p>
                       </div>
                        <div>
                        <i className="fas fa-map-marker-alt"></i>
                        <p><strong>{offer.name}</strong></p>
                        </div>
                        <div>
                        <i className="fas fa-sun"></i>
                        <p><strong>Discovery</strong></p>
                        </div>
                        </div>
                        <p className="card-text p-3 text-white">{offer.dec}</p>
                        <p  className="card-text p-3 text-white">I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams.</p>
                        <p  className="card-text p-3 text-white">I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <RegistarForm offer={offer}></RegistarForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDetails;