interface heroProps {
    slideText: String,
    slideImagen: String
}

const Hero = ({ slideText, slideImagen }: heroProps): JSX.Element => {
    return (
        <div className="">
            {slideImagen}
            {slideText}
        </div>
    )
}

export default Hero;