import { Flex,Image,Text } from "@chakra-ui/react";
import titleIcon from '../assets/title.png'
export default function Header() {
	return <Flex position={'absolute'} zIndex={1} top={{base: '1rem',sm: '2rem', md: '4.7rem', lg: '8rem', xl: '10rem'}} left={0} width={'100%'} justifyContent={'center'} gap={{base: 1, xl: 3}} alignItems={'center'}>
		<Image src={titleIcon} width={{base: '2rem',sm: '2.4rem',md: '2.6rem', lg: '2.8rem', xl: '3rem'}} height={{base: '2rem',sm: '2.4rem',md: '2.6rem', lg: '2.8rem', xl: '3rem'}}/>
		<Text color={'#FFFFFF'} width={'-webkit-fit-content'} fontFamily={'Alata'} fontSize={{base: '2rem',md: '2.4rem', lg: '2.8rem', xl: '3.2rem'}} mt={{base: -2, xl: -3}}>capybaralabs</Text>
	</Flex>
}