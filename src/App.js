import { useRef } from "react";
import Video from "./Video.js";
import Button from "./components/Button/index.js";
import GlobalStyle from "./components/GlobalStyles"

function App() {
	const videoRef = useRef()

	const handlePlay = () => {
		videoRef.current.play()
	}

	const handlePause = () => {
		videoRef.current.pause()
	}

  	return (
		<GlobalStyle >
			<div style={{padding: 20}}>
				<Video ref={videoRef} /> { //nhận từ callback useImperativeHandle 
				}
				<Button handle={{handlePlay, handlePause}}  />
			</div>
		</GlobalStyle>
  )
}

export default App;