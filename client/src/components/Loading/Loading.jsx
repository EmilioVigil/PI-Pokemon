import loading from '../../images/pikachu-loading.gif'
import { LoadingContainer } from './LoadingStyle.js'
export default function Loading(){
	return(
		<LoadingContainer>
			<img  src={loading} alt="gif loading"  />
			<span>Loading...</span>
		</LoadingContainer>
		)
}