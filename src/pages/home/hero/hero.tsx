interface heroProps {
    sliderText: string
}

const Hero = ({ sliderText }: heroProps): JSX.Element => {
    return (
        <div className="">
            {sliderText}
        </div>
    )
}

export default Hero;