import LottieView from 'lottie-react-native';


export function AnimationLoadingWhite() {
    return (
        <LottieView source={require('./../../../assets/static/animations/animation_loading_01_neutral_000.json')}
            style={{ width: 150, height: 150 }} 
            autoPlay
            loop />
    )
}
