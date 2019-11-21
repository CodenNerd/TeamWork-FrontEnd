import React, { Component } from 'react';

class Teamwork extends Component {
    
    render() { 
        return ( 
            <svg id="teamwork-svg" width="500" height="100" viewBox="0 0 749 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M69.968 6.192V18.848H42.608V108.56H27.504V18.848H0V6.192H69.968ZM28.504 17.848V107.56H41.608V17.848H68.968V7.192H1V17.848H28.504ZM157.568 74H94.6726C95.3055 81.0535 97.8306 86.5365 102.184 90.545C106.884 94.6892 112.546 96.768 119.226 96.768C124.736 96.768 129.228 95.5088 132.768 93.0586C136.434 90.4911 138.991 87.1113 140.458 82.8955L140.691 82.224H156.831L156.478 83.4923C154.306 91.2893 149.955 97.6663 143.446 102.597L143.438 102.603C136.899 107.458 128.806 109.856 119.226 109.856C111.583 109.856 104.691 108.139 98.5747 104.687L98.5686 104.683C92.5466 101.228 87.8099 96.3392 84.3649 90.0398L84.3618 90.0341C80.9122 83.6277 79.2022 76.2602 79.2022 67.96C79.2022 59.6647 80.8621 52.3464 84.2151 46.0348C87.5655 39.7283 92.2592 34.8813 98.2889 31.5199C104.408 28.066 111.397 26.352 119.226 26.352C126.864 26.352 133.662 28.0181 139.591 31.378C145.511 34.7325 150.062 39.379 153.224 45.3047C156.481 51.1316 158.098 57.7319 158.098 65.08C158.098 67.6142 157.952 70.2887 157.661 73.1029L157.568 74ZM152.346 45.784C149.274 40.024 144.858 35.512 139.098 32.248C133.338 28.984 126.714 27.352 119.226 27.352C111.546 27.352 104.73 29.032 98.7782 32.392C92.9222 35.656 88.3622 40.36 85.0982 46.504C81.8342 52.648 80.2022 59.8 80.2022 67.96C80.2022 76.12 81.8822 83.32 85.2422 89.56C88.6022 95.704 93.2102 100.456 99.0662 103.816C105.018 107.176 111.738 108.856 119.226 108.856C128.634 108.856 136.506 106.504 142.842 101.8C148.897 97.2127 153.024 91.354 155.221 84.224C155.323 83.8934 155.421 83.5601 155.514 83.224H141.402C139.866 87.64 137.178 91.192 133.338 93.88C129.594 96.472 124.89 97.768 119.226 97.768C112.314 97.768 106.41 95.608 101.514 91.288C96.922 87.0631 94.3068 81.3004 93.6687 74C93.6398 73.6698 93.615 73.3365 93.5942 73H156.666C156.954 70.216 157.098 67.576 157.098 65.08C157.098 57.88 155.514 51.448 152.346 45.784ZM139.401 50.0559L139.395 50.0458C137.288 46.5647 134.412 43.963 130.749 42.2233L130.735 42.2168L130.722 42.2098C127.132 40.3689 123.115 39.44 118.65 39.44C112.262 39.44 106.841 41.4681 102.33 45.5166C98.1652 49.3363 95.6508 54.5819 94.8476 61.344H142.547C142.408 56.9375 141.347 53.1869 139.401 50.0559ZM143.547 61.344C143.557 61.6741 143.562 62.0074 143.562 62.344H93.7383C93.7685 62.0074 93.8027 61.674 93.8408 61.344C94.6516 54.3328 97.2574 48.8101 101.658 44.776C106.362 40.552 112.026 38.44 118.65 38.44C123.258 38.44 127.434 39.4 131.178 41.32C135.018 43.144 138.042 45.88 140.25 49.528C142.309 52.8405 143.408 56.7792 143.547 61.344ZM187.277 31.5319L187.283 31.5282C193.204 28.0744 199.763 26.352 206.939 26.352C213.998 26.352 220.178 27.8728 225.444 30.9528C229.533 33.3445 232.831 36.2352 235.315 39.6299V27.648H250.563V108.56H235.315V96.2676C232.75 99.7719 229.358 102.765 225.161 105.252L225.156 105.255C219.892 108.334 213.76 109.856 206.795 109.856C199.614 109.856 193.096 108.083 187.266 104.526C181.438 100.969 176.852 95.982 173.509 89.5915C170.161 83.1906 168.499 75.924 168.499 67.816C168.499 59.6164 170.159 52.3929 173.513 46.1763C176.858 39.881 181.447 34.9905 187.277 31.5319ZM174.395 46.648C171.131 52.696 169.499 59.752 169.499 67.816C169.499 75.784 171.131 82.888 174.395 89.128C177.659 95.368 182.123 100.216 187.787 103.672C193.451 107.128 199.787 108.856 206.795 108.856C213.611 108.856 219.563 107.368 224.651 104.392C229.207 101.692 232.761 98.3999 235.315 94.5143C235.668 93.9781 236.001 93.4307 236.315 92.872V107.56H249.563V28.648H236.315V43.048C236.002 42.4823 235.669 41.9286 235.315 41.387C232.848 37.6092 229.389 34.4189 224.939 31.816C219.851 28.84 213.851 27.352 206.939 27.352C199.931 27.352 193.547 29.032 187.787 32.392C182.123 35.752 177.659 40.504 174.395 46.648ZM222.424 43.1944L222.412 43.1873C218.541 40.8835 214.255 39.728 209.531 39.728C204.799 39.728 200.508 40.8393 196.635 43.0522C192.778 45.2565 189.689 48.4748 187.37 52.7415C185.063 56.9861 183.891 62.0001 183.891 67.816C183.891 73.7281 185.063 78.8397 187.372 83.1818C189.69 87.4471 192.781 90.7156 196.643 93.0162C200.514 95.2261 204.803 96.336 209.531 96.336C214.261 96.336 218.551 95.2254 222.423 93.014C226.382 90.7117 229.518 87.4431 231.835 83.1818C234.144 78.8375 235.315 73.7732 235.315 67.96C235.315 62.1441 234.143 57.1301 231.837 52.8855C229.521 48.6248 226.388 45.4071 222.436 43.2012L222.424 43.1944ZM232.715 83.656C230.315 88.072 227.051 91.48 222.923 93.88C218.891 96.184 214.427 97.336 209.531 97.336C204.635 97.336 200.171 96.184 196.139 93.88C192.107 91.48 188.891 88.072 186.491 83.656C184.091 79.144 182.891 73.864 182.891 67.816C182.891 61.864 184.091 56.68 186.491 52.264C188.891 47.848 192.107 44.488 196.139 42.184C200.171 39.88 204.635 38.728 209.531 38.728C214.427 38.728 218.891 39.928 222.923 42.328C227.051 44.632 230.315 47.992 232.715 52.408C235.115 56.824 236.315 62.008 236.315 67.96C236.315 73.912 235.115 79.144 232.715 83.656ZM399.572 108.56H384.612V62.92C384.612 55.206 382.684 49.4911 378.984 45.6101L378.976 45.6015L378.968 45.5927C375.348 41.6112 370.404 39.584 364.012 39.584C357.433 39.584 352.293 41.7038 348.478 45.8823L348.471 45.8904C344.67 49.9625 342.692 55.9682 342.692 64.072V108.56H327.732V62.92C327.732 55.206 325.804 49.4911 322.104 45.6101L322.096 45.6015L322.088 45.5927C318.468 41.6112 313.523 39.584 307.132 39.584C300.553 39.584 295.413 41.7038 291.598 45.8823L291.591 45.8904C287.79 49.9625 285.812 55.9682 285.812 64.072V108.56H270.708V27.648H285.812V36.8834C288.228 33.8507 291.201 31.4305 294.725 29.6296L294.732 29.6255C299.297 27.3434 304.299 26.208 309.724 26.208C316.503 26.208 322.537 27.7325 327.797 30.8088C332.468 33.541 336.081 37.404 338.635 42.3684C340.966 37.5695 344.457 33.7602 349.095 30.9599C354.347 27.789 360.191 26.208 366.604 26.208C372.889 26.208 378.526 27.5345 383.488 30.2124C388.473 32.8066 392.402 36.7456 395.273 41.992C398.156 47.2604 399.572 53.6267 399.572 61.048V108.56ZM383.02 31.096C378.22 28.504 372.748 27.208 366.604 27.208C360.364 27.208 354.7 28.744 349.612 31.816C344.913 34.6531 341.442 38.5546 339.199 43.5205C339.014 43.9317 338.836 44.3502 338.668 44.776C338.485 44.355 338.296 43.9414 338.1 43.5353C335.61 38.3849 332.008 34.4305 327.292 31.672C322.204 28.696 316.348 27.208 309.724 27.208C304.444 27.208 299.596 28.312 295.18 30.52C291.393 32.4553 288.271 35.1281 285.812 38.5383C285.465 39.0189 285.132 39.5141 284.812 40.024V28.648H271.708V107.56H284.812V64.072C284.812 55.816 286.828 49.528 290.86 45.208C294.892 40.792 300.316 38.584 307.132 38.584C313.756 38.584 318.988 40.696 322.828 44.92C326.764 49.048 328.732 55.048 328.732 62.92V107.56H341.692V64.072C341.692 55.816 343.708 49.528 347.74 45.208C351.772 40.792 357.196 38.584 364.012 38.584C370.636 38.584 375.868 40.696 379.708 44.92C383.644 49.048 385.612 55.048 385.612 62.92V107.56H398.572V61.048C398.572 53.752 397.18 47.56 394.396 42.472C391.612 37.384 387.82 33.592 383.02 31.096ZM526.547 27.648L501.299 108.56H486.285L468.019 48.3638L449.753 108.56H434.741L409.345 27.648H424.862L442.28 91.2368L461.08 27.648H475.971L494.337 91.3075L511.46 27.648H526.547ZM494.371 95.032L475.219 28.648H461.827L442.243 94.888L424.099 28.648H410.707L435.475 107.56H449.011L468.019 44.92L487.027 107.56H500.563L525.187 28.648H512.227L494.371 95.032ZM551.962 104.69L551.956 104.687C545.84 101.234 541.007 96.3482 537.464 90.0503L537.46 90.0422L537.456 90.0341C534.006 83.6277 532.296 76.2602 532.296 67.96C532.296 59.7493 534.057 52.4718 537.608 46.1577L537.611 46.1533C541.25 39.7603 546.181 34.8724 552.399 31.5155C558.606 28.0677 565.542 26.352 573.184 26.352C580.826 26.352 587.762 28.0678 593.97 31.5155C600.184 34.8709 605.069 39.7096 608.613 46.0099C612.263 52.3262 614.072 59.6537 614.072 67.96C614.072 76.273 612.212 83.6508 608.465 90.0624C604.822 96.3619 599.842 101.245 593.536 104.693C587.235 108.139 580.252 109.856 572.608 109.856C565.058 109.856 558.169 108.138 551.962 104.69ZM607.6 89.56C611.248 83.32 613.072 76.12 613.072 67.96C613.072 59.8 611.296 52.648 607.744 46.504C604.288 40.36 599.536 35.656 593.488 32.392C587.44 29.032 580.672 27.352 573.184 27.352C565.696 27.352 558.928 29.032 552.88 32.392C546.832 35.656 542.032 40.408 538.48 46.648C535.024 52.792 533.296 59.896 533.296 67.96C533.296 76.12 534.976 83.32 538.336 89.56C541.792 95.704 546.496 100.456 552.448 103.816C558.496 107.176 565.216 108.856 572.608 108.856C580.096 108.856 586.912 107.176 593.056 103.816C599.2 100.456 604.048 95.704 607.6 89.56ZM594.925 83.5888L594.93 83.5818C597.412 79.3518 598.68 74.16 598.68 67.96C598.68 61.7541 597.458 56.5569 595.065 52.3241C592.653 48.0559 589.522 44.9384 585.68 42.9258L585.672 42.9215L585.664 42.9171C581.782 40.7917 577.58 39.728 573.04 39.728C568.4 39.728 564.15 40.7933 560.272 42.9171L560.265 42.9212C556.521 44.9298 553.486 48.0426 551.167 52.3095C548.864 56.5456 547.688 61.7482 547.688 67.96C547.688 74.2734 548.818 79.5267 551.027 83.7633C553.346 88.0255 556.382 91.1872 560.129 93.2912C563.91 95.3181 568.063 96.336 572.608 96.336C577.148 96.336 581.402 95.2722 585.384 93.1422C589.331 91.0311 592.511 87.8612 594.921 83.5959L594.925 83.5888ZM559.648 94.168C555.712 91.96 552.544 88.648 550.144 84.232C547.84 79.816 546.688 74.392 546.688 67.96C546.688 61.624 547.888 56.248 550.288 51.832C552.688 47.416 555.856 44.152 559.792 42.04C563.824 39.832 568.24 38.728 573.04 38.728C577.744 38.728 582.112 39.832 586.144 42.04C590.176 44.152 593.44 47.416 595.936 51.832C598.432 56.248 599.68 61.624 599.68 67.96C599.68 74.296 598.384 79.672 595.792 84.088C593.296 88.504 589.984 91.816 585.856 94.024C581.728 96.232 577.312 97.336 572.608 97.336C567.904 97.336 563.584 96.28 559.648 94.168ZM667.893 27.2192C668.224 27.2117 668.557 27.208 668.893 27.208V40.744H665.437C650.749 40.744 643.405 48.712 643.405 64.648V107.56H630.301V28.648H643.405V41.464C643.721 40.8464 644.054 40.2478 644.405 39.668C646.621 36.0117 649.552 33.1064 653.197 30.952C657.281 28.5925 662.18 27.3483 667.893 27.2192ZM644.405 37.8241C646.587 34.6456 649.349 32.0644 652.689 30.0911L652.697 30.0861C657.201 27.4841 662.614 26.208 668.893 26.208H669.893V41.744H665.437C658.269 41.744 653.071 43.6845 649.649 47.3977C646.212 51.1264 644.405 56.8148 644.405 64.648V108.56H629.301V27.648H644.405V37.8241ZM727.635 108.56L698.124 75.3432V108.56H683.02V0H698.124V60.9631L727.052 27.648H748.117L710.019 67.9612L748.256 108.56H727.635ZM708.644 67.96L745.796 28.648H727.508L697.124 63.64V1H684.02V107.56H697.124V72.712L728.084 107.56H745.94L708.644 67.96Z" fill="white" />
        </svg>
         );
    }
}
 
export default Teamwork;