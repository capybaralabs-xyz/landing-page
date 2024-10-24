import { Flex,Image,Text } from "@chakra-ui/react";
import titleIcon from '../assets/title.png'
export default function Header() {
	return <Flex position={'absolute'} zIndex={1} top={{base: 4,md: 6, lg: 4, xl: 8}} left={0} width={'100%'} justifyContent={'center'} gap={{base: 1, xl: 3}} alignItems={'center'}>
		<Image src={titleIcon} width={{base: 4,md: 4, lg: 6, xl: 8}} height={{base: 4,md: 4, lg: 6, xl: 8}}/>
		<Text color={'#FFFFFF'} width={'-webkit-fit-content'} fontFamily={'Alata'} fontSize={{base: 16,md: 24, lg: 28, xl: 32}} mt={{base: -2, xl: -3}}>capybaralabs</Text>
	</Flex>
}