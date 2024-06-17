import LottieView from 'lottie-react-native';


export function AnimationLoadingPrimary() {
    return (
        <LottieView source={require('./../../../assets/static/animations/animation_loading_01_primary.json')}
            style={{ width: 48, height: 48 }} 
            autoPlay
            loop />
    )
}
