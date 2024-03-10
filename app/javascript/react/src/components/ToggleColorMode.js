import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
    return (
        <Box sx={{ maxWidth: '32px' }}>
            <Button
                variant="text"
                onClick={toggleColorMode}
                size="small"
                aria-label="button to toggle theme"
                sx={{ minWidth: '32px', height: '32px', p: '4px' }}
            >
                {mode === 'dark' ? (
                    <WbSunnyRoundedIcon fontSize="small" />
                ) : (
                    <ModeNightRoundedIcon fontSize="small" />
                )}
            </Button>
        </Box>
    );
}

ToggleColorMode.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;

<Form action={`/rv-rentals/search`} acceptCharset="UTF-8" method="get" style={{ margin: "auto" }}>
<div className="col-md-12" style={{ marginTop: '16px' }}>
    <div className="row">
        <Form.Group className="col-xs-12 text-box-padding" controlId="autocompleteloc" >
            <LocationSearchInput location={loc} setLocation={setLocation} />
        </Form.Group>
    </div>
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-6 text-box-padding">
            <Form.Control
                type="date"
                name="start_date"
                defaultValue={startDate}
                placeholder="Start Date"
                onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-6 text-box-padding">
            <Form.Control
                type="date"
                name="end_date"
                defaultValue={endDate}
                placeholder="End Date"
                onChange={(e) => setEndDate(e.target.value)} />
        </div>
    </div>
    <div className="row">
        <div className="col-xs-12 text-box-padding">
            <Form.Control
                className="btn btn-green btn-sm pad_small search-btn center-block"
                type="submit"
                name="commit"
                value="Search RVs"
            />
        </div>
    </div>
</div>
</Form>

import React from 'react';
import Config from '../../../../config';
import rvNowPayLaterLogo from './images/rv_now_pay_later_logo.webp';
import HubLogo from './images/HUB_logo.webp';
import HubLogoMobile from './images/HUB_logo_horizontal.webp';

const upliftPath = Config.RailsRoutes.UpliftPath;

const SlideData = ({ isHost }) => {
    // Assuming you want to dynamically set a slide to require a host or not based on some condition
    // But since hostRequired is part of the slide's data structure, it should be predefined or adjusted outside this structure based on different logic.
    // The isHost parameter does not directly influence the slides' hostRequired property here, unless used within a condition to filter or modify slides.

    return [
        {
            id: 1,
            hostRequired: false,
            mobileContent: (
                <div className="template-4">
                    <img src={rvNowPayLaterLogo} alt="RV Now Pay Later" className="template-img-4 responsive" />
                    <div className="template-4-cta">
                        <a href={upliftPath} target="_blank" rel="noopener noreferrer">
                            <button className="button-27" role="button">Learn More</button>
                        </a>
                    </div>
                </div>
            ),
            desktopContent: (
                <div className="template-4">
                    <div className="left-content">
                        <img src={rvNowPayLaterLogo} alt="RV Now Pay Later" className="template-img-4 responsive" />
                        <p>If you are experiencing difficulties accessing Uplift, please disable your ad blocking software.</p>
                    </div>
                    <span className="vertical-line-white"></span>
                    <div className="t-4-bg-img"></div>
                    <div className="template-4-cta">
                        <a href={upliftPath} target="_blank" rel="noopener noreferrer">
                            <button className="button-27" role="button">Learn More</button>
                        </a>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            hostRequired: isHost ? true : false,
            mobileContent: (
                <div
                    className="template-2">
                    <div className="t-2-logo">
                        <img src={HubLogoMobile} alt="Hub Logo" style={{ height: '65px' }}/>
                    </div>
                    <div
                        className="t-2-promo">
                        <h2>Hosts &middot; Dealers</h2>
                        <p>Save on RV Dealer insurance for open lot, property, liability and more.</p>
                    </div>
                    <div className="template-2-cta">
                        <a href="https://www.hubinternational.com/forms/rvngo-contact-us/?utm_medium=display-ads&utm_source=home-page-mobile_2024&utm_campaign=us-home-page-mobile-commercial_2024&utm_content=image_brand_us__paid_ext-dep&ref=ub15453049 " target="_blank">
                            <button className="button-28" role="button">Learn More</button>
                        </a>
                    </div>
                    <div className="curve-stroke">
                        <div className="image-container">
                        </div>
                    </div>
                </div>
            ),
            desktopContent: (
                <div
                    className="template-2">
                    <div className="t-2-logo">
                        <img src={HubLogo} alt="Hub Logo" style={{ width: '100px' }}/>
                    </div>
                    <div
                        className="t-2-promo">
                        <h2>Hosts &middot; Dealers</h2>
                        <p>Save on RV Dealer insurance for open lot, property, liability and more.</p>
                    </div>
                    <div className="template-2-cta">
                        <a href="https://www.hubinternational.com/forms/rvngo-contact-us/?utm_medium=display-ads&utm_source=home-page-desktop-commercial-2024&utm_campaign=home-page-desktop-commercial-2024&utm_content=image_brand_us__paid_ext-dep&ref=ck13495105" target="_blank">
                            <button className="button-28" role="button">Learn More</button>
                        </a>
                    </div>
                    <div className="right-side-curve">
                        <div className="image-container">
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            hostRequired: false,
            mobileContent: (
                <div className="template-3">
                    <div className="t-3-promo">
                        <h2>Stationary Rentals</h2>
                        <p>Have the RV delivered and set up at your campsite.</p>
                    </div>
                    <div className="template-3-cta">
                        <a href="https://www.rvngo.com/rvs-for-rent/search" target="_blank">
                            <button className="button-29" role="button">Book Now</button>
                        </a>
                    </div>
                </div>
            ),
            desktopContent: (
                <div
                    className="template-3">
                    <div
                        className="t-3-promo">
                        <h2>Stationary Rentals</h2>
                        <p>Have the RV delivered and set up at your campsite.</p>
                    </div>
                    <div className="template-3-cta">
                        <a href="https://www.rvngo.com/rvs-for-rent/search" target="_blank">
                            <button className="button-29" role="button">Book Now</button>
                        </a>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            hostRequired: isHost, // Dynamic condition based on isHost for this example
            mobileContent: (
                <div className="template-2">
                    <div className="t-2-logo">
                        <img src={HubLogoMobile} alt="Hub Logo" style={{ height: '65px' }} />
                    </div>
                    <div className="t-2-promo">
                        <h2>Hosts &middot; Dealers</h2>
                        <p>Protect your RV business with tailored insurance and risk solutions.</p>
                    </div>
                    <div className="template-2-cta">
                        <a href="https://www.hubinternational.com/forms/rvngo-contact-us/" target="_blank" rel="noopener noreferrer">
                            <button className="button-28" role="button">Learn More</button>
                        </a>
                    </div>
                    <div className="curve-stroke">
                        <div className="image-container"></div>
                    </div>
                </div>
            ),
            desktopContent: (
                <div className="template-2">
                    <div className="t-2-logo">
                        <img src={HubLogo} alt="Hub Logo" style={{ width: '100px' }} />
                    </div>
                    <div className="t-2-promo">
                        <h2>Hosts &middot; Dealers</h2>
                        <p>Protect your RV business with tailored insurance and risk solutions.</p>
                    </div>
                    <div className="template-2-cta">
                        <a href="https://www.hubinternational.com/forms/rvngo-contact-us/" target="_blank" rel="noopener noreferrer">
                            <button className="button-28" role="button">Learn More</button>
                        </a>
                    </div>
                    <div className="right-side-curve">
                        <div className="image-container"></div>
                    </div>
                </div>
            )
        },
        // Add more slides as needed...
    ];
};

export default SlideData;

import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import LocationSearchInput from '../../../../components/LocationSearchInput';
import RvTypes from '../RvTypes';

const SearchForm = ({data}) => {
    const { location } = data;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [loc, setLocation] = useState(location || '');
    const [wordOrder, setWordOrder] = useState(0)
    const WORDS_TO_ANIMATE = [
        'Find Your RVnGO Today!',
        'Bringing People Together...',
        'We care about you, that\'s why all rentals include our $1 million protection plan!',
        'No fees means we have the lowest prices, and that we\'re able to bring more people together!'
    ];

    useEffect(() => {
        const wordTimeout = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1))
        }, 7000)

        return () => clearInterval(wordTimeout)
    }, [])

    return <>
        <Form action={`/rv-rentals/search`} acceptCharset="UTF-8" method="get" style={{ margin: "auto" }}>
            <div className="col-md-12" style={{ marginTop: '16px' }}>
                <div className="row">
                    <Form.Group className="col-xs-12 text-box-padding" controlId="autocompleteloc" >
                        <LocationSearchInput location={loc} setLocation={setLocation} />
                    </Form.Group>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 text-box-padding">
                        <Form.Control
                            type="date"
                            name="start_date"
                            defaultValue={startDate}
                            placeholder="Start Date"
                            onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 text-box-padding">
                        <Form.Control
                            type="date"
                            name="end_date"
                            defaultValue={endDate}
                            placeholder="End Date"
                            onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-box-padding">
                        <Form.Control
                            className="btn btn-green btn-sm pad_small search-btn center-block"
                            type="submit"
                            name="commit"
                            value="Search RVs"
                        />
                    </div>
                </div>
            </div>
        </Form>
        <div id="rider">
            {WORDS_TO_ANIMATE[wordOrder % WORDS_TO_ANIMATE.length]}
        </div>
    </>
}
const Main = ({ data }) => {
    const { is_new_member } = data;
    return <div className="home-banner-container">
        <div id="lead">
            <div id="inner-content">
                <div className="container mobile-container">
                    <div className="row">
                        {is_new_member && <div className="alert alert-info alert-dismissible fade out in" style={{ textAlign: 'center' }}>
                            <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
                            As a first time User, you have to confirm your email address before you login. Check your junk or clutter
                            folders if you didn't get an email already asking you to confirm your email address.
                        </div>}
                        <div className="col-sm-12 parent-div">
                            <div className="col-md-6 col-sm-12 caption-heading" id="guest-callout">
                                <h1 className="find-text"><b>Find Your RV Rental</b></h1>
                                <div className="search-form wow pulse">
                                    <SearchForm data={data} />
                                    <div className="clearfix"></div>
                                    <div id="rider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RvTypes data={data}/>
            </div>
        </div>
    </div>
}

export default Main;

# See http://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
#

User-Agent: adidxbot
Crawl-Delay: 5
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-Agent: AdsBot-Google
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-agent: AhrefsBot
Crawl-Delay: 30
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-agent: AhrefsSiteAudit
Crawl-Delay: 15
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-Agent: baiduspider
Disallow: /

User-Agent: baiduspider-image
Disallow: /

User-Agent: baiduspider-mobile
Disallow: /

User-Agent: baiduspider-news
Disallow: /

User-Agent: baiduspider-video
Disallow: /

User-Agent: bingbot
Crawl-Delay: 5
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

# User-Agent: DotBot
# Crawl-Delay: 20
# Disallow: /rv-rentals/search?
# Disallow: /rv-sales/search?

User-Agent: Googlebot
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-Agent: Googlebot-Image
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-Agent: Googlebot-Mobile
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search? 

User-Agent: Googlebot-News
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search? 

User-Agent: Googlebot-Video
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search? 

User-Agent: Mediapartners-Google
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search? 

User-Agent: msnbot
Crawl-Delay: 5
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

User-Agent: msnbot-media
Crawl-Delay: 5
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

# User-Agent: rogerbot
# Crawl-Delay: 20
# Disallow: /rv-rentals/search?
# Disallow: /rv-sales/search?

User-agent: SemrushBot
Crawl-Delay: 30
# Disallow: 

User-Agent: slurp
Crawl-Delay: 10
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

# User-Agent: yandex
# Crawl-Delay: 20
# Disallow: /rv-rentals/search?
# Disallow: /rv-sales/search?

User-agent: *
Crawl-Delay: 20
Disallow: /rv-rentals/search?
Disallow: /rv-sales/search?

Sitemap: https://www.rvngo.com/sitemap.xml.gz