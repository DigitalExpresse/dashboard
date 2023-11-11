function MenuAltIcon() {
    return (
        <div>
            <svg
                fill="#000000"
                viewBox="0 0 24 24"
                id="menu-alt"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon line-color"
                width={"28px"}
                height={"28px"}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <line
                        id="secondary"
                        x1="8"
                        y1="12"
                        x2="21"
                        y2="12"
                        style={{
                            fill: 'none',
                            stroke: '#637379',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                        }}
                    >
                    </line>
                    <path
                        id="primary"
                        d="M3,18H21M3,6H21"
                        style={{
                            fill: 'none',
                            stroke: '#637379',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            opacity: 0.8,
                        }}
                    ></path>
                </g>
            </svg>
        </div>
    );
}

export default MenuAltIcon;
