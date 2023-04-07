import backgroundImage from '../../images/coffee_wallpaper.jpg'

export default function Background(props) {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div className="relative flex flex-col min-h-screen">
                <div
                    className="
                        absolute inset-0
                        before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-10 before:content-['']
                    "
                    style={backgroundStyle}
                ></div>
                <div className="relative z-20 flex-1">
                    {props.children}
                </div>
            </div>
        </>
    );
}
