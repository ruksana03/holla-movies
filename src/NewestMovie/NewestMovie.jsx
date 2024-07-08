/* eslint-disable react/no-unknown-property */

import './NewestMovie.css';
import newMovie1 from '../assets/movies/newest-movie-1.png';
import newMovie2 from '../assets/movies/newest-movie-2.png';
import newMovie3 from '../assets/movies/newest-movie-3.png';
import newMovie4 from '../assets/movies/newest-movie-4.png';
import newMovie5 from '../assets/movies/newest-movie-5.png';
import newMovie6 from '../assets/movies/newest-movie-6.png';

const NewestMovie = () => {
    const newMovies = [
        { img: newMovie1, title: 'THE FAMILY MONKS', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: newMovie2, title: 'THE FAMILY MONKS', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: newMovie3, title: 'THE FAMILY MONKS', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: newMovie4, title: 'THE FAMILY MONKS', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: newMovie5, title: 'THE FAMILY MONKS', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: newMovie6, title: 'THE FAMILY MONKS', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
    ];

    return (
        <div>
            <div className='d-flex justify-content-between mt-10 mx-32'>
                <div>
                    <h1 className="new-movie">Newest releases
                        <svg width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.88859 15.023C3.3734 10.5632 0.73792 4.56467 -0.00012207 0.35356L2.5185 2.25423C3.61301 5.79391 5.98958 10.1066 10.1462 13.4678C12.8613 15.6634 16.363 17.4747 20.8135 18.3891V21.6744C16.363 22.5888 12.8613 24.4002 10.1462 26.5957C5.05716 30.7109 2.63634 36.2524 1.96985 40.0552L-0.00012207 39.71C0.73792 35.4989 3.3734 29.5004 8.88859 25.0406C11.5762 22.8673 14.9256 21.0772 19.0333 20.0318C14.9256 18.9863 11.5762 17.1962 8.88859 15.023ZM20.8135 14.5416L2.44838 2.02263C2.23817 1.3132 2.08004 0.636991 1.96985 0.00830078L-0.00012207 0.35356L2.44838 2.02263C2.47114 2.09945 2.49451 2.17665 2.5185 2.25423L20.8135 16.0605V14.5416Z" fill="#E2E2E2" />
                        </svg>
                    </h1>
                </div>
                <div>
                    <button className='border rounded-circle p-3 mx-4'><svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M7.41044 1.56243V0.86377H8.8062V1.56243C8.8062 4.21531 7.33751 6.76678 5.12691 8.27828H22.3364V9.67561H5.12683C7.33747 11.1871 8.8062 13.7386 8.8062 16.3915V17.0901H7.41044V16.3915C7.41044 12.957 4.36603 9.68752 0.721895 9.67564C0.71526 9.67566 0.70862 9.67567 0.701981 9.67567H0.00409889V9.67561V8.27834V8.27828H0.00468445H0.701981H0.72875C4.36984 8.26233 7.41044 4.99483 7.41044 1.56243Z" fill="white" />
                    </svg>
                    </button>
                    <button className='border border-primary rounded-circle p-3'>
                        <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4455 1.26116V0.5625H14.0498V1.26116C14.0498 3.91404 15.5185 6.46552 17.729 7.97702H0.519531V9.37434H17.7291C15.5185 10.8858 14.0498 13.4373 14.0498 16.0902V16.7888H15.4455V16.0902C15.4455 12.6557 18.4899 9.38625 22.1341 9.37437C22.1407 9.37439 22.1473 9.3744 22.154 9.3744H22.8519V9.37434V7.97707V7.97702H22.8513H22.154H22.1272C18.4861 7.96107 15.4455 4.69356 15.4455 1.26116Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-6'>
                {newMovies.map((movie, index) => (
                    <div className='movie-container' key={index}>
                        <img src={movie.img} className='new-movie-img' alt="" />
                        <div className='movie-text'>
                            <div >
                                <button className='play'>
                                    <svg width="71" height="72" viewBox="0 0 71 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_b_1_922)">
                                            <ellipse cx="35.5" cy="36.1921" rx="35.5" ry="35.5398" fill="url(#paint0_linear_1_922)" />
                                        </g>
                                        <path d="M44.249 34.4911C45.5132 35.2728 45.5132 37.1115 44.249 37.8933L33.0518 44.8169C31.7194 45.6408 30 44.6824 30 43.1158L30 29.2686C30 27.702 31.7194 26.7436 33.0518 27.5675L44.249 34.4911Z" fill="white" />
                                        <defs>
                                            <filter id="filter0_b_1_922" x="-15" y="-14.3477" width="101" height="101.08" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_922" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_922" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1_922" x1="7.06183" y1="10.9703" x2="62.2773" y2="61.9255" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white" stop-opacity="0.27" />
                                                <stop offset="1" stop-color="white" stop-opacity="0.09" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>

                                <div className='title-btn-type'>
                                    <p className='new-movie-title'>{movie.title}</p>
                                    <div className='movie-btn-group'>
                                        <button className='new-movie-btn'>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.68341 0.452137L9.24195 3.74897C9.35677 3.98783 9.57592 4.1537 9.82867 4.19056L13.3294 4.72726C13.5339 4.75748 13.7194 4.87102 13.8447 5.04426C13.9687 5.2153 14.0219 5.43204 13.9918 5.64509C13.9673 5.82202 13.8881 5.98569 13.767 6.11101L11.2304 8.69938C11.0448 8.88 10.9608 9.14761 11.0056 9.40932L11.6302 13.0482C11.6967 13.4876 11.4201 13.9019 11.0056 13.9852C10.8348 14.014 10.6597 13.9838 10.5057 13.9012L7.38305 12.1886C7.1513 12.0655 6.87754 12.0655 6.64579 12.1886L3.52312 13.9012C3.13944 14.1157 2.66403 13.9697 2.45049 13.5716C2.37137 13.4131 2.34336 13.2325 2.36927 13.0563L2.9938 9.41669C3.03861 9.15572 2.9539 8.88664 2.76906 8.70602L0.232412 6.11912C-0.0693531 5.81244 -0.078455 5.30745 0.212107 4.98971C0.218409 4.98307 0.22541 4.9757 0.232412 4.96833C0.352838 4.83931 0.511072 4.75748 0.681908 4.7361L4.18266 4.19867C4.43471 4.16108 4.65386 3.99668 4.76939 3.75634L6.27191 0.452137C6.40564 0.169045 6.6829 -0.00714949 6.98396 0.000222678H7.07778C7.33894 0.0333974 7.56649 0.203695 7.68341 0.452137Z" fill="#D27304" />
                                            </svg> {movie.rating}
                                        </button>
                                        <button className='new-movie-btn'>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M14 7C14 10.8668 10.8661 14 7 14C3.1339 14 0 10.8668 0 7C0 3.1346 3.1339 0 7 0C10.8661 0 14 3.1346 14 7Z" fill="white" />
                                                <path d="M9.50163 9.67005C9.40993 9.67005 9.31753 9.64625 9.23283 9.59655L6.48463 7.95715C6.32643 7.86195 6.22913 7.69045 6.22913 7.50565V3.97275C6.22913 3.68295 6.46433 3.44775 6.75413 3.44775C7.04393 3.44775 7.27913 3.68295 7.27913 3.97275V7.20745L9.77113 8.69355C10.0196 8.84265 10.1015 9.16465 9.95313 9.41385C9.85443 9.57835 9.68013 9.67005 9.50163 9.67005Z" fill="white" />
                                            </svg> {movie.duration}
                                        </button>
                                        <button className='new-movie-btn'>
                                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_820)">
                                                    <rect x="4" width="15" height="14" rx="3" fill="white" fill-opacity="0.4" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.125 8.75H10.375V10H9.25V8.75H7V5H8.125V7.5H9.25V5H10.375V7.5H11.125V8.75ZM16 10H14.6875L13.375 8.125V10H12.25V5H13.375V6.875L14.6875 5H16L14.3125 7.5L16 10Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_820" x="0" y="0" width="23" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_820" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_820" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            {movie.quality}
                                        </button>
                                    </div>
                                    <p className='movie-type'>Action, Comedy</p>
                                </div>

                            </div>
                            <div className='d-flex flex-column pt-6 pr-4'>
                                <button className='new-btn-style rounded-circle mb-4'>
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 10.1513C12.7314 10.1513 13 9.88236 13 9.55061C13 9.21887 12.7314 8.94994 12.4 8.94994H1.6C1.26863 8.94994 1 9.21887 1 9.55061C1 9.88236 1.26863 10.1513 1.6 10.1513H12.4ZM12.4 5.94658C12.7314 5.94658 13 5.67765 13 5.34591C13 5.01416 12.7314 4.74523 12.4 4.74523H7.6C7.26863 4.74523 7 5.01416 7 5.34591C7 5.67765 7.26863 5.94658 7.6 5.94658H12.4ZM12.4 1.74187C12.7314 1.74187 13 1.47294 13 1.1412C13 0.809458 12.7314 0.540527 12.4 0.540527H7.6C7.26863 0.540527 7 0.809458 7 1.1412C7 1.47294 7.26863 1.74187 7.6 1.74187H12.4Z" fill="white" stroke="white" stroke-width="0.5" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.92488C1 1.45309 1.51837 1.16546 1.918 1.41551L4.98592 3.33511C5.36192 3.57037 5.36192 4.11858 4.98592 4.35384L1.918 6.27345C1.51837 6.52349 1 6.23587 1 5.76408V1.92488ZM2.2 3.84448C2.2 4.20834 2.59979 4.43017 2.90799 4.23732C3.19798 4.05588 3.19798 3.63307 2.90799 3.45163C2.59979 3.25879 2.2 3.48061 2.2 3.84448Z" fill="white" fill-opacity="0.4" />
                                    </svg>
                                </button>
                                <button className='new-btn-style rounded-circle mb-4'>
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.46155 8.90837C1.33914 8.90837 1.22174 8.95705 1.13518 9.04371C1.04863 9.13036 1 9.24789 1 9.37043C1 9.49298 1.04863 9.6105 1.13518 9.69716C1.22174 9.78381 1.33914 9.83249 1.46155 9.83249C1.58396 9.83249 1.70135 9.88117 1.78791 9.96782C1.87447 10.0545 1.9231 10.172 1.9231 10.2945C1.9231 10.4171 1.97172 10.5346 2.05828 10.6213C2.14484 10.7079 2.26223 10.7566 2.38464 10.7566C2.50705 10.7566 2.62445 10.7079 2.71101 10.6213C2.79756 10.5346 2.84619 10.4171 2.84619 10.2945C2.84619 9.92691 2.70031 9.57433 2.44064 9.31437C2.18097 9.05442 1.82878 8.90837 1.46155 8.90837ZM1.46155 7.06014C1.33914 7.06014 1.22174 7.10882 1.13518 7.19548C1.04863 7.28213 1 7.39966 1 7.5222C1 7.64475 1.04863 7.76227 1.13518 7.84893C1.22174 7.93558 1.33914 7.98426 1.46155 7.98426C2.0736 7.98426 2.66058 8.22766 3.09337 8.66093C3.52615 9.09419 3.76929 9.68182 3.76929 10.2945C3.76929 10.4171 3.81791 10.5346 3.90447 10.6213C3.99103 10.7079 4.10842 10.7566 4.23083 10.7566C4.35324 10.7566 4.47064 10.7079 4.5572 10.6213C4.64376 10.5346 4.69238 10.4171 4.69238 10.2945C4.69147 9.43701 4.35078 8.61486 3.74508 8.00849C3.13938 7.40212 2.31814 7.06106 1.46155 7.06014ZM1.46155 5.21191C1.33914 5.21191 1.22174 5.2606 1.13518 5.34725C1.04863 5.4339 1 5.55143 1 5.67397C1 5.79652 1.04863 5.91404 1.13518 6.0007C1.22174 6.08735 1.33914 6.13603 1.46155 6.13603C2.56286 6.13725 3.61872 6.57577 4.39747 7.35538C5.17622 8.13499 5.61426 9.19201 5.61548 10.2945C5.61548 10.4171 5.66411 10.5346 5.75066 10.6213C5.83722 10.7079 5.95462 10.7566 6.07703 10.7566C6.19944 10.7566 6.31683 10.7079 6.40339 10.6213C6.48995 10.5346 6.53857 10.4171 6.53857 10.2945C6.53705 8.94702 6.00166 7.65512 5.04986 6.70227C4.09806 5.74942 2.80759 5.21344 1.46155 5.21191Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7296 10.4859C12.9027 10.3126 13 10.0775 13 9.83242V1.51542C13 1.27033 12.9027 1.03528 12.7296 0.861974C12.5565 0.68867 12.3217 0.591309 12.0769 0.591309H1.92308C1.67826 0.591309 1.44347 0.68867 1.27036 0.861974C1.09725 1.03528 1 1.27033 1 1.51542V3.8257C1 3.94824 1.04863 4.06577 1.13518 4.15242C1.22174 4.23907 1.33913 4.28775 1.46154 4.28775C1.58395 4.28775 1.70134 4.23907 1.7879 4.15242C1.87445 4.06577 1.92308 3.94824 1.92308 3.8257V1.51542H12.0769V9.83242H7.92308C7.80067 9.83242 7.68328 9.8811 7.59672 9.96775C7.51016 10.0544 7.46154 10.1719 7.46154 10.2945C7.46154 10.417 7.51016 10.5345 7.59672 10.6212C7.68328 10.7078 7.80067 10.7565 7.92308 10.7565H12.0769C12.3217 10.7565 12.5565 10.6592 12.7296 10.4859Z" fill="white" stroke="white" stroke-width="0.5" />
                                    </svg>

                                </button>
                                <button className='new-btn-style-c rounded-circle mb-4'>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9999 5.55089C12.9935 3.90417 12.1306 2.35553 10.4292 1.80682C9.26087 1.4294 7.98829 1.63929 7 3.05978C6.01172 1.63929 4.73912 1.4294 3.57085 1.80682C1.86928 2.35559 1.0063 3.90452 1.00006 5.55146C0.98432 8.82674 4.29943 11.333 6.99916 12.5309L7 12.5306L7.00085 12.5309C9.70072 11.3329 13.0161 8.82642 12.9999 5.55089Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                        <path opacity="0.4" d="M9.42809 6.62549C8.9285 7.48448 8.04005 8.17938 7.01279 8.16159C5.98546 8.17938 5.097 7.48448 4.59741 6.62549" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="square" />
                                    </svg>

                                </button>
                                <button className='new-btn-style rounded-circle mb-4'>
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M3.99546 6.10202H3.39027C2.07027 6.10202 1 7.17349 1 8.49497L1 11.6607C1 12.9815 2.07027 14.053 3.39027 14.053H10.6097C11.9297 14.053 13 12.9815 13 11.6607V8.48848C13 7.1709 11.933 6.10202 10.6169 6.10202H10.0052" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7 1.69039L7 9.50952" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.10889 3.59204L6.9997 1.69067L8.89116 3.59204" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewestMovie;
