/* eslint-disable react/no-unknown-property */
import './Movies.css';
import movie1 from '../assets/movies/movies-1.png';
import movie2 from '../assets/movies/movies-2.png';
import movie3 from '../assets/movies/movies-3.png';
import movie4 from '../assets/movies/movies-4.png';

const Movies = () => {
    const movies = [
        { img: movie1, title: 'SAMELILL SRONLE', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: movie2, title: 'SAMELILL SRONLE', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: movie3, title: 'SAMELILL SRONLE', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
        { img: movie4, title: 'SAMELILL SRONLE', rating: 9.5, duration: '02h 30m', quality: '4k Quality' },
    ];

    return (
        <div className="movies">
            {movies.map((movie, index) => (
                <div key={index}>
                    <img className='movie-img' src={movie.img} alt={movie.title} />
                    <h1 className='movie-title'>{movie.title}</h1>

                    <div className='movie-btn-group'>
                        <button className='movie-btn'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.68341 0.452137L9.24195 3.74897C9.35677 3.98783 9.57592 4.1537 9.82867 4.19056L13.3294 4.72726C13.5339 4.75748 13.7194 4.87102 13.8447 5.04426C13.9687 5.2153 14.0219 5.43204 13.9918 5.64509C13.9673 5.82202 13.8881 5.98569 13.767 6.11101L11.2304 8.69938C11.0448 8.88 10.9608 9.14761 11.0056 9.40932L11.6302 13.0482C11.6967 13.4876 11.4201 13.9019 11.0056 13.9852C10.8348 14.014 10.6597 13.9838 10.5057 13.9012L7.38305 12.1886C7.1513 12.0655 6.87754 12.0655 6.64579 12.1886L3.52312 13.9012C3.13944 14.1157 2.66403 13.9697 2.45049 13.5716C2.37137 13.4131 2.34336 13.2325 2.36927 13.0563L2.9938 9.41669C3.03861 9.15572 2.9539 8.88664 2.76906 8.70602L0.232412 6.11912C-0.0693531 5.81244 -0.078455 5.30745 0.212107 4.98971C0.218409 4.98307 0.22541 4.9757 0.232412 4.96833C0.352838 4.83931 0.511072 4.75748 0.681908 4.7361L4.18266 4.19867C4.43471 4.16108 4.65386 3.99668 4.76939 3.75634L6.27191 0.452137C6.40564 0.169045 6.6829 -0.00714949 6.98396 0.000222678H7.07778C7.33894 0.0333974 7.56649 0.203695 7.68341 0.452137Z" fill="#D27304" />
                            </svg> {movie.rating}
                        </button>
                        <button className='movie-btn'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M14 7C14 10.8668 10.8661 14 7 14C3.1339 14 0 10.8668 0 7C0 3.1346 3.1339 0 7 0C10.8661 0 14 3.1346 14 7Z" fill="white" />
                                <path d="M9.50163 9.67005C9.40993 9.67005 9.31753 9.64625 9.23283 9.59655L6.48463 7.95715C6.32643 7.86195 6.22913 7.69045 6.22913 7.50565V3.97275C6.22913 3.68295 6.46433 3.44775 6.75413 3.44775C7.04393 3.44775 7.27913 3.68295 7.27913 3.97275V7.20745L9.77113 8.69355C10.0196 8.84265 10.1015 9.16465 9.95313 9.41385C9.85443 9.57835 9.68013 9.67005 9.50163 9.67005Z" fill="white" />
                            </svg> {movie.duration}
                        </button>
                        <button className='movie-btn'>
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

                </div>
            ))}
        </div>
    );
}

export default Movies;
