import { 
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Skeleton,
    Stack,
    Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';

const UserDetails = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false)

    useEffect(() => {
      const fetchData = async() => {
        const apiData = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const response = await apiData.json();
        setData(response?.results);
        setLoading(false);
      }
  
      fetchData();
    }, []);

    const copyToClipboard = (phno) => {
        navigator.clipboard.writeText(phno)
    }
  return (
    <Flex flexDir="column">
        <Header title={'User Details'}/>
        <Flex w="100%" justifyContent="center">
            {
                loading ? (
                 <Skeleton 
                 w={{base: '80%',md:'60%',lg: '50%'}}
                 h={{base: '350px',lg:'250px'}}
                 mt='6rem'
                 borderRadius="10px"
                />
                ) : data.length > 0 ? (
                <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                mt="6rem"
                border='1px solid gray'
                w={{base: '80%',md:'60%',lg: '50%'}}
                alignItems={{base:'center',md:'inherit'}}
                
                >
                <Image
                    fallbackSrc='/loader.svg'
                    objectFit='cover'
                    maxW={{ base: '50%', sm: '200px' }}
                    src={data[0]?.picture?.large}
                    alt='Caffe Latte'
                    borderRadius={{base: '20%',md:'inherit'}}
                    mt={{base:'2rem',md:'0'}}
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>{data[0]?.name.first} {data[0]?.name.last}</Heading>
                    <Flex gap={2} mt={4}>
                    <Image boxSize={5} src='/svgs/gender.svg' /> :
                    <Text>{data[0]?.gender}</Text>
                    </Flex>
                    <Flex gap={2} mt={2}>
                    <Image boxSize={5} src='/svgs/phone.svg' /> : 
                    <Text>{data[0]?.phone}</Text>
                    <button onClick={() => { copyToClipboard(data[0]?.phone);setCopied(true) }}>
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                    </Flex>
                    <Flex gap={2} mt={4}>
                    <Image boxSize={5} src='/svgs/mail.svg' /> :
                    <Text>{data[0]?.email}</Text>
                    </Flex>
                    <Flex gap={2} mt={2}>
                    <Image boxSize={5} mt={2} src='/svgs/address.svg' /> 
                    <Text py='2'>
                        : {`${data[0]?.location.city} , ${data[0]?.location.street.name} , ${data[0]?.location.state}, ${data[0]?.location.country}- ${data[0]?.location.postcode}`}
                    </Text>
                    </Flex>
                    </CardBody>

                    <CardFooter>
                    </CardFooter>
                </Stack>
                </Card>
                ) : (
                    <Text mt="6rem" textAlign="center">No data Found</Text>
                )
            }
        </Flex>
    </Flex>
  )
}

export default UserDetails;