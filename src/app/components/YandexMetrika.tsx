"use client";
import React, { useEffect } from 'react';

export const YandexMetrika: React.FC = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://mc.yandex.ru/metrika/tag.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // @ts-ignore
            if (window.ym) {
                // @ts-ignore
                window.ym(102293919, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/102293919" style={{ position: 'absolute', left: '-9999px' }} alt="" />
            </div>
        </noscript>
    );
};
