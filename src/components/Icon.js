import React from 'react';

const Icon = ({ name, className, color, onClick }) => {
    switch (name) {
        case 'instagram':
            return (
                <svg className={className} onClick={onClick} fill={color} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9908 0.00911713C28.4183 0.00911713 23.8551 0.00911713 19.2826 0.00911713C15.081 0.00911713 11.232 1.19647 7.85591 3.72887C2.79183 7.54138 0.120668 12.6618 0.0557436 18.9975C-0.0370052 28.2829 0.0186441 37.5684 0.0371938 46.8631C0.0557436 55.5734 5.89891 63.1613 14.3205 65.332C15.8879 65.7401 17.5482 65.9442 19.162 65.9535C28.4369 66.0184 37.7025 65.9998 46.968 65.9813C55.603 65.9627 63.2362 60.0074 65.3787 51.6681C65.796 50.0634 65.9908 48.4215 65.9908 46.7611C65.9908 37.5684 65.9908 28.3757 65.9908 19.183C65.9908 9.89752 59.4149 1.99422 50.2792 0.324509C49.1569 0.12043 47.9976 0.0276718 46.8568 0.0184021C42.2286 -0.0187073 37.6097 0.00911713 32.9815 0.00911713H32.9908ZM32.9444 5.94587C37.5541 5.94587 42.1544 5.94587 46.764 5.94587C47.4225 5.94587 48.081 5.98298 48.7303 6.08502C55.3154 7.09612 60.0734 12.6433 60.0734 19.3036C60.0734 28.4035 60.0734 37.5034 60.0734 46.6034C60.0734 47.2991 60.0363 47.9948 59.9436 48.6812C59.0254 55.1374 53.3863 60.0445 46.8568 60.0538C37.8138 60.0631 28.7707 60.0538 19.7277 60.0538C18.9023 60.0538 18.0675 60.026 17.2514 59.9054C10.8331 58.9499 6.00094 53.3935 5.97311 46.8631C5.93601 37.5776 5.93601 28.2829 5.97311 18.9975C5.99166 15.6395 7.20667 12.6804 9.50684 10.2129C12.2429 7.29092 15.6375 5.92732 19.6257 5.9366C24.0591 5.94587 28.5018 5.9366 32.9352 5.9366L32.9444 5.94587Z"></path>
                    <path d="M16.092 32.9952C16.1105 42.4662 23.6602 49.9521 33.1577 49.9242C42.3769 49.8964 49.9731 42.2992 49.9452 33.1065C49.9174 23.5242 42.4326 16.0476 32.8795 16.0569C23.6232 16.0755 16.0734 23.6819 16.092 32.9859V32.9952ZM33.0279 43.9689C26.925 43.9782 22.0557 39.0989 22.0464 32.9767C22.0464 26.9193 26.925 22.0308 33.0093 22.0122C39.0009 21.9937 43.9073 26.8822 44.0093 32.7911C44.1206 38.9505 38.9731 44.0802 33.0186 43.9689H33.0279Z"></path>
                    <path d="M50.6315 46.6591C48.387 46.6777 46.6433 48.4587 46.7175 50.787C46.7824 52.8927 48.4612 54.581 50.7521 54.5531C52.9317 54.5253 54.6475 52.7164 54.5733 50.4067C54.5084 48.3288 52.8575 46.6962 50.6315 46.6591Z"></path>
                </svg>
            );
        case 'facebook':
            return (
                <svg className={className} onClick={onClick} fill={color} viewBox="0 0 38 84" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28718 41.919C5.77078 41.919 3.41166 41.8815 1.06464 41.944C0.193575 41.969 -0.0120915 41.6692 6.59918e-06 40.8198C0.0363008 36.9352 0.0483988 33.0381 6.59918e-06 29.1535C6.59918e-06 28.2666 0.193576 27.9419 1.10093 27.9669C3.02452 28.0418 4.96021 27.9918 6.8838 27.9918C8.48075 27.9918 8.26298 28.1542 8.28718 26.493C8.34767 22.7707 8.31137 19.036 8.51704 15.3138C8.71061 11.8164 9.49698 8.4314 11.4811 5.48359C13.9249 1.86129 17.4817 0.312441 21.5587 0.12508C25.8657 -0.074771 30.1968 0.0376453 34.5037 0.0126639C35.3626 0.0126639 36.2216 0.050136 37.0806 0.0126639C37.7338 -0.0248082 38 0.150062 38 0.899504C37.9637 4.94649 37.9758 8.99348 38 13.0405C38 13.7025 37.7822 13.9148 37.141 13.9023C34.2012 13.8773 31.2614 13.8773 28.3216 13.9023C27.4747 13.9023 26.5915 13.9523 25.7689 14.1521C23.2646 14.7767 21.9943 16.6628 21.8128 19.1359C21.6192 22.0213 21.7644 24.9441 21.7644 27.9669H37.2015C37.0564 29.0036 36.9475 29.8904 36.8144 30.7773C36.2942 34.2122 35.7377 37.6347 35.2537 41.0696C35.157 41.7816 34.8666 41.919 34.2496 41.919C30.4508 41.894 26.652 41.919 22.8653 41.919C22.5266 41.919 22.1999 41.919 21.7039 41.919C21.7039 42.3811 21.7039 42.7684 21.7039 43.1681C21.7039 56.3208 21.7039 69.4735 21.7039 82.6137C21.7039 83.5297 21.2482 83.9877 20.3368 83.9877C16.6953 83.9877 13.0538 83.9627 9.4123 84.0127C8.51704 84.0127 8.28718 83.7254 8.28718 82.826C8.31137 69.6483 8.29927 56.4582 8.29927 43.2805V41.9315L8.28718 41.919Z"/>
                </svg>
            );
        case 'youtube':
            return (
                <svg className={className} onClick={onClick} fill={color} viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.2875 49.9168C37.5334 50.0065 34.7734 50.0244 32.0193 49.9706C23.7629 49.8091 17.113 49.6895 8.92134 48.7206C5.54934 48.3259 3.1601 46.3821 1.8419 43.1943C-0.776848 32.357 -0.194251 20.8797 1.07687 9.86894C1.30049 5.46703 4.75489 1.58545 9.14497 1.14287C18.4606 -0.0832085 27.8352 0.0304279 37.1979 0.00650442C45.1954 -0.0413425 53.2047 0.209854 61.1433 1.21464C64.8919 1.68713 67.7755 4.37851 68.617 8.40363C70.4943 19.0256 70.353 29.863 68.8112 40.5209C67.9579 48.4814 60.3724 49.3666 53.9344 49.4383C49.2147 49.6177 44.501 49.7732 40.2934 49.9108L40.2875 49.9168ZM27.7292 24.9527C27.7292 24.9527 27.7528 24.9527 27.7646 24.9527C27.7646 28.1943 27.7646 31.4419 27.7646 34.6835C27.7646 35.4431 27.9823 35.5508 28.6237 35.174C29.8419 34.4622 31.0659 33.7565 32.29 33.0448C34.5851 31.7051 36.8801 30.3594 39.1811 29.0256C41.2643 27.8175 43.3535 26.6333 45.4367 25.4252C45.8839 25.168 45.8839 24.7433 45.4367 24.4802C43.9478 23.613 42.459 22.7398 40.9642 21.8785C36.786 19.4682 32.6078 17.0699 28.4354 14.6596C27.9999 14.4084 27.8057 14.5041 27.741 15.0304C27.7234 15.1979 27.7292 15.3654 27.7292 15.5328C27.7292 18.6728 27.7292 21.8067 27.7292 24.9467V24.9527Z"/>
                </svg>
            );
        case 'tiktok':
        return (
            <svg className={className} onClick={onClick} fill={color} viewBox="0 0 68 78" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.8879 28.7629V42.0768C26.4005 42.0302 24.9318 41.853 23.4909 41.9649C18.7221 42.3565 14.7527 45.918 13.5907 50.7289C12.5031 55.2415 14.5761 60.3601 18.5547 62.8215C22.2917 65.1337 26.2053 65.3481 30.0539 63.2597C34.0139 61.1153 36.0498 57.6376 36.0591 53.0971C36.0869 35.7462 36.0683 18.3859 36.0776 1.03495C36.0776 0.699305 36.0776 0.372984 36.0776 -0.00927734H49.3988C49.2779 5.18389 50.9605 9.71508 54.6138 13.4258C58.2764 17.1365 62.7757 18.8521 68 18.8054V32.138C64.6813 32.1846 61.4556 31.7371 58.295 30.7861C55.1623 29.8444 52.2526 28.4179 49.4081 26.46C49.4081 26.9168 49.4081 27.2059 49.4081 27.5042C49.4081 36.0165 49.4824 44.5195 49.3895 53.0318C49.2872 62.1595 45.3922 69.3199 37.7137 74.2613C27.0977 81.0954 12.3822 78.2704 4.90826 68.0426C-3.87643 56.0247 -0.520582 39.4755 12.28 31.8769C16.9465 29.1079 22.0314 28.1196 27.4138 28.6883C27.5439 28.6976 27.6648 28.7256 27.8879 28.7629Z"/>
            </svg>
        );
        case 'pinterest':
        return (
            <svg className={className} onClick={onClick} fill={color} viewBox="0 0 60 84" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0211 55.2805C22.7125 65.2104 20.762 75.3714 14.2934 83.5604C14.0039 84.2306 13.0211 84.0996 12.9144 83.3909C12.4496 78.5145 12.1372 73.5842 12.5868 68.677C14.0268 61.2739 15.5811 53.8861 17.1582 46.5061C17.5315 44.765 17.7296 42.9624 18.2934 41.283C18.8725 39.5651 18.4382 38.0398 18.0268 36.4375C16.8001 31.7152 17.2192 27.17 19.6039 22.8945C21.9049 17.918 30.103 16.9705 31.482 23.3491C32.823 30.6906 28.503 37.5468 27.802 44.7573C27.1315 53.2775 37.9582 54.8414 42.4458 48.9327C47.543 42.9624 49.0211 34.6733 49.1353 26.9929C49.4096 1.06256 12.5182 3.15793 9.26486 26.5229C6.79629 39.0028 13.0058 39.4419 12.2363 43.9716C11.6039 45.728 11.7563 49.8725 8.88391 48.5937C-4.48752 40.5127 -1.22656 19.3201 8.53344 9.49029C26.9411 -9.84574 62.1944 1.94847 59.8934 30.498C59.3449 42.3307 54.1639 55.8813 42.202 59.9719C35.6115 61.8362 29.4858 60.8579 25.0287 55.2805H25.0211Z"/>
            </svg>
        );
        case 'day':
        return (
            <svg className={className} onClick={onClick} fill={color} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9326 6.35708C10.1956 6.35708 6.35578 10.1969 6.35578 14.9339C6.35578 19.6709 10.1956 23.5108 14.9326 23.5108C19.6696 23.5108 23.5095 19.6709 23.5095 14.9339C23.5095 10.1969 19.6696 6.35708 14.9326 6.35708ZM14.9326 22.1054C10.972 22.1054 7.75975 18.8945 7.75975 14.9325C7.75975 10.9705 10.9706 7.75965 14.9326 7.75965C18.8947 7.75965 22.1055 10.9705 22.1055 14.9325C22.1055 18.8945 18.8947 22.1054 14.9326 22.1054Z"/>
                <path d="M14.934 24.6284H14.9326C14.5535 24.6284 14.2461 24.9357 14.2461 25.3149V29.152C14.2461 29.5311 14.5535 29.8385 14.9326 29.8385H14.934C15.3132 29.8385 15.6206 29.5311 15.6206 29.152V25.3149C15.6206 24.9357 15.3132 24.6284 14.934 24.6284Z"/>
                <path d="M14.934 0.0265732H14.9326C14.5535 0.0265732 14.2461 0.333948 14.2461 0.713115V4.55017C14.2461 4.92934 14.5535 5.23671 14.9326 5.23671H14.934C15.3132 5.23671 15.6206 4.92934 15.6206 4.55017V0.713115C15.6206 0.333948 15.3132 0.0265732 14.934 0.0265732Z"/>
                <path d="M0.02668 14.9325V14.9339C0.02668 15.3131 0.334055 15.6205 0.713222 15.6205H4.55027C4.92944 15.6205 5.23682 15.3131 5.23682 14.9339V14.9325C5.23682 14.5534 4.92944 14.246 4.55027 14.246H0.713222C0.334055 14.246 0.02668 14.5534 0.02668 14.9325Z"/>
                <path d="M24.6299 14.9311V14.9325C24.6299 15.3117 24.9372 15.6191 25.3164 15.6191H29.1535C29.5326 15.6191 29.84 15.3117 29.84 14.9325V14.9311C29.84 14.552 29.5326 14.2446 29.1535 14.2446H25.3164C24.9372 14.2446 24.6299 14.552 24.6299 14.9311Z"/>
                <path d="M23.3314 19.7799L23.3307 19.7812C23.1412 20.1095 23.2537 20.5294 23.582 20.719L26.905 22.6375C27.2334 22.8271 27.6533 22.7146 27.8429 22.3862L27.8436 22.385C28.0331 22.0566 27.9206 21.6368 27.5923 21.4472L24.2693 19.5287C23.9409 19.3391 23.521 19.4516 23.3314 19.7799Z"/>
                <path d="M2.02461 7.47948L2.02391 7.48069C1.83433 7.80906 1.94683 8.22894 2.2752 8.41853L5.59819 10.3371C5.92656 10.5266 6.34644 10.4141 6.53602 10.0858L6.53672 10.0845C6.72631 9.75618 6.6138 9.33629 6.28543 9.14671L2.96245 7.22818C2.63408 7.0386 2.2142 7.15111 2.02461 7.47948Z"/>
                <path d="M7.4798 27.8406L7.48102 27.8413C7.80939 28.0309 8.22927 27.9184 8.41885 27.59L10.3374 24.2671C10.527 23.9387 10.4145 23.5188 10.0861 23.3292L10.0849 23.3285C9.7565 23.1389 9.33662 23.2514 9.14704 23.5798L7.22851 26.9028C7.03893 27.2312 7.15143 27.651 7.4798 27.8406Z"/>
                <path d="M19.7798 6.53508L19.7811 6.53579C20.1094 6.72537 20.5293 6.61286 20.7189 6.28449L22.6374 2.96151C22.827 2.63314 22.7145 2.21326 22.3861 2.02367L22.3849 2.02297C22.0565 1.83339 21.6367 1.9459 21.4471 2.27426L19.5285 5.59725C19.339 5.92562 19.4515 6.3455 19.7798 6.53508Z"/>
                <path d="M19.7827 23.3297L19.7815 23.3304C19.4531 23.52 19.3406 23.9399 19.5302 24.2682L21.4487 27.5912C21.6383 27.9196 22.0582 28.0321 22.3865 27.8425L22.3878 27.8418C22.7161 27.6522 22.8286 27.2324 22.639 26.904L20.7205 23.581C20.5309 23.2526 20.1111 23.1401 19.7827 23.3297Z"/>
                <path d="M7.48093 2.02332L7.47971 2.02402C7.15134 2.21361 7.03883 2.63349 7.22842 2.96186L9.14694 6.28484C9.33653 6.61321 9.75641 6.72572 10.0848 6.53614L10.086 6.53543C10.4144 6.34585 10.5269 5.92597 10.3373 5.5976L8.41876 2.27461C8.22918 1.94625 7.80929 1.83374 7.48093 2.02332Z"/>
                <path d="M2.02337 22.3854L2.02407 22.3867C2.21365 22.715 2.63354 22.8275 2.9619 22.6379L6.28489 20.7194C6.61326 20.5298 6.72576 20.11 6.53618 19.7816L6.53548 19.7804C6.3459 19.452 5.92601 19.3395 5.59764 19.5291L2.27466 21.4476C1.94629 21.6372 1.83378 22.0571 2.02337 22.3854Z"/>
                <path d="M23.3299 10.0841L23.3306 10.0853C23.5202 10.4137 23.94 10.5262 24.2684 10.3366L27.5914 8.4181C27.9198 8.22852 28.0323 7.80863 27.8427 7.48027L27.842 7.47905C27.6524 7.15068 27.2325 7.03818 26.9042 7.22776L23.5812 9.14629C23.2528 9.33587 23.1403 9.75575 23.3299 10.0841Z"/>
            </svg>
        );
        case 'night':
        return (
            <svg className={className} onClick={onClick} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.7097 21.7519C25.6364 23.3567 23.0098 24.2757 20.173 24.1697C13.897 23.9364 8.88181 18.6413 8.92384 12.307C8.94485 8.29853 10.9481 4.77083 13.988 2.65703C14.4994 2.30355 15.0387 1.98542 15.5991 1.71678C16.0964 1.47641 15.9353 0.719971 15.3819 0.719971C15.3749 0.719971 15.3679 0.719971 15.3539 0.719971C14.6675 0.719971 13.988 0.769458 13.3226 0.861362C5.90493 1.8511 0.14728 8.19249 0.000187122 15.9195C-0.160915 24.4383 6.62638 31.5644 15.0667 31.72C21.2867 31.8331 26.6801 28.2135 29.2017 22.9396C29.4959 22.3175 29.755 21.6741 29.9652 21.0167C30.1333 20.4864 29.4749 20.0906 29.0966 20.4935C28.6693 20.953 28.2 21.3701 27.7027 21.759L27.7097 21.7519ZM14.8426 29.8465C7.93621 29.585 2.28363 24.0071 1.87738 17.0436C1.56218 11.6424 4.36395 6.87755 8.62965 4.39614C9.0219 4.16991 9.44917 4.62944 9.20402 5.01119C7.7611 7.28052 6.9696 10.0023 7.08167 12.922C7.35484 19.8714 12.8533 25.5624 19.7317 26.0078C21.2096 26.0997 22.6455 25.9583 23.9974 25.6048C24.4387 25.4917 24.7258 26.0502 24.3896 26.3542C21.875 28.6376 18.5129 29.9809 14.8426 29.8395V29.8465Z"/>
                <path d="M17.4551 19.0655C17.4551 19.0655 19.0871 18.5706 20.0467 18.5282C20.1027 17.595 20.579 15.9124 20.579 15.9124C20.579 15.9124 21.0763 17.5526 21.1114 18.5282C22.078 18.5847 23.703 19.0655 23.703 19.0655C23.703 19.0655 22.099 19.5674 21.1114 19.6028C21.0343 20.7268 20.579 22.2185 20.579 22.2185C20.579 22.2185 20.0607 20.4723 20.0467 19.6028C18.996 19.525 17.4551 19.0655 17.4551 19.0655Z"/>
                <path d="M22.6874 10.9991C22.6874 10.9991 24.4875 10.4547 25.5382 10.4053C25.5942 9.38018 26.1265 7.52795 26.1265 7.52795C26.1265 7.52795 26.6799 9.33069 26.7149 10.4053C27.7796 10.4618 29.5657 10.9991 29.5657 10.9991C29.5657 10.9991 27.8006 11.5576 26.7149 11.5929C26.6309 12.8301 26.1265 14.4703 26.1265 14.4703C26.1265 14.4703 25.5522 12.5473 25.5382 11.5929C24.3824 11.5081 22.6874 10.9991 22.6874 10.9991Z"/>
                <path d="M14.7583 10.0942C14.7583 10.0942 15.6899 9.81142 16.2433 9.78314C16.2713 9.24585 16.5515 8.28439 16.5515 8.28439C16.5515 8.28439 16.8387 9.22464 16.8597 9.78314C17.413 9.81142 18.3446 10.0942 18.3446 10.0942C18.3446 10.0942 17.427 10.3841 16.8597 10.4053C16.8177 11.0486 16.5515 11.904 16.5515 11.904C16.5515 11.904 16.2503 10.9072 16.2433 10.4053C15.6409 10.3628 14.7583 10.0942 14.7583 10.0942Z"/>
            </svg>
        );
        case 'pause':
        return (
            <svg className={className} onClick={onClick} fill={color} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" d="M30.0 0v200H80V0h0.0Z m90 0v200H170V0h0.0Z"/>
            </svg>
        );
        case 'start':
        return (
            <svg className={className} onClick={onClick} fill={color} viewBox="0 0 1920.00 1920.00" xmlns="http://www.w3.org/2000/svg">
                <path d="M175 .024V1920l1570.845-959.927z"/>
            </svg>
        );
        case 'reset':
        return (
            <svg className={className} onClick={onClick} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" transform="rotate(90)">
                <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"/>
            </svg>
        );
        default:
            return null;
    }
};

export default Icon;