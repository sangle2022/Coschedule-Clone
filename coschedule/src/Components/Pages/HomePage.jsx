import {
    Box,
    
    
    Text,
    Img,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Spacer,
    Stack,
    Select,
    HStack,
    Icon,
    VStack,
    Container,List,ListItem, UnorderedList
    
  } from "@chakra-ui/react";
//   import {Search2Icon} from"@chakra-ui/icons";
// import { Divider } from "@chakra-ui/core";

  
  function Homepage() {
   
  
    return (
      
      <Box marginTop={"6rem"} >
        
            <Box  textAlign="center" lineHeight={"3rem"}>
                <Heading  >Organize All Of Your Marketing In <br/> One Place. From Any Place.</Heading>
                <Text>Get more done in less time with the only work management software for marketers.</Text>
                <Button color={"white"} backgroundColor={"#F37e5d"}>Get Started Free</Button>
                <Text>Why not? It's free forever.</Text>
            </Box>
            <Box Align="center">
                <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75"/>
            </Box>
            <Box pad >
                <Box Align="center">
                    <Heading>30,000 marketers start their day with CoSchedule</Heading>
                    <br/>
                    <HStack gap={"2rem"} paddingLeft={"15%"}>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75"/>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75"/>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75"/>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fvericast-logo2.webp&w=256&q=75"/>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75"/>
                    </HStack>
                    <br/>
                    <HStack gap={"2rem"} paddingLeft={"32%"}>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75"/>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=256&q=75"/>
                        <Img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=256&q=75"/>
                    </HStack>
                </Box>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Heading Align="center">Our Products</Heading>
            <br/>
            <br/>
            <Box >
            <Grid
                templateAreas={`
                                "kav nav "
                                "khav gav"`}
                gridTemplateRows={'270px  270px'}
                gridTemplateColumns={'320px 320px '}
                h='300px'
                gap='14rem'
                color='blackAlpha.700'
                fontWeight='bold'
                justifyContent={"center"}
               marginLeft="-12%"
               
                
                >
                
                <GridItem pl='2'  area={'kav'}  height={"450px"} width={"160%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                    <Box width="100%" >
                    <Img  height={"100px"} width="100%"  src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100"/>
                    </Box>
                   
                   <Img   paddingLeft={"10%"} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75"/>
                   <Box lineHeight={"27px"} textAlign={"left"} paddingLeft="10%">
                      <Heading fontSize={"28px"}>Marketing Calendar</Heading>
                      <Text>A calendar that helps you see,<br/> schedule, and share your marketing.</Text>
                      <br/>
                      <Box paddingLeft="6%" >
                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>See everything together in one place</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Share your progress with higher-ups</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Show what your marketing is doing</Text>
                        </HStack>
                        
                       
                      </Box>
                   </Box>
                   <br/>
                   <Button marginLeft={"-40%"}color={"#F37e5d"} backgroundColor={"#FFEDE3"}>Explore More</Button>
                </GridItem>


                

                <GridItem pl='2'  area={'nav'}  height={"450px"} width={"160%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                    <Box width="100%" >
                    <Img   height={"100px"} width="100%"  src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100" alt=""/>
                    </Box>
                   
                   <Img   paddingLeft={"10%"} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75"/>
                   <Box lineHeight={"27px"} textAlign={"left"} paddingLeft="10%">
                      <Heading fontSize={"28px"}>Marketing Suite</Heading>
                      <Text>A family of agile marketing products to coordinate your team, projects, and process.</Text>
                      <br/>
                      <Box paddingLeft="6%" >
                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Manage marketing requests</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Eliminate content bottlenecks</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Maximize resources to increase output</Text>
                        </HStack>
                        
                       
                      </Box>
                   </Box>
                   <br/>
                   <Button marginLeft={"-40%"}color={"#F37e5d"} backgroundColor={"#FFEDE3"}>Explore More</Button>
                </GridItem>


                

<                   GridItem pl='2'  area={'khav'}  height={"450px"} width={"160%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                    <Box width="100%" >
                    <Img  height={"100px"} width="100%"  src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100"/>
                    </Box>
                   
                   <Img height={"13%"}  paddingLeft={"10%"} src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_77217643bee6578bf2bde1b69e038bbf/headline-studio.png"/>
                   <Box lineHeight={"27px"} textAlign={"left"} paddingLeft="10%">
                      <Heading fontSize={"28px"}>Headline Studio</Heading>
                      <Text>Write better headlines that will boost your traffic.</Text>
                      <br/>
                      <Box paddingLeft="6%" >
                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Score your headlines based on proven data</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Improve headlines with smart suggestions</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Find the high-scoring words instantly</Text>
                        </HStack>
                        
                       
                      </Box>
                   </Box>
                   <br/>
                   <Button marginLeft={"-40%"}color={"#F37e5d"} backgroundColor={"#FFEDE3"}>Explore More</Button>
                </GridItem>


                

                   <GridItem pl='2'  area={'gav'}  height={"450px"} width={"160%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                    <Box width="100%" >
                    <Img  height={"100px"} width="100%"  src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100"/>
                    </Box>
                   
                   <Img height={"13%"}  paddingLeft={"10%"} src="https://thegivingblock.com/wp-content/uploads/2021/12/Audius-600px.png"/>
                   <Box lineHeight={"27px"} textAlign={"left"} paddingLeft="10%">
                      <Heading fontSize={"28px"}>Actionable Marketing Institute</Heading>
                      <Text>Develop new marketing skills in 30 minutes (or less).</Text>
                      <br/>
                      <Box paddingLeft="6%" >
                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Improve your marketing with fluff-free training</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Spend less time learning & more time doing</Text>
                        </HStack>

                        <HStack>
                        <Img height={"15px"} width="15px" src="https://freepikpsd.com/file/2019/10/right-tick-mark-png-8-Transparent-Images.png"/>
                        <Text>Learn from industry pros you trust</Text>
                        </HStack>
                        
                       
                      </Box>
                   </Box>
                   <br/>
                   <Button marginLeft={"-40%"}color={"#F37e5d"} backgroundColor={"#FFEDE3"}>Explore More</Button>
                </GridItem>
                
                
            </Grid>
            </Box  >
              <Box paddingTop={"50rem"}>
                <Heading>The fastest growing marketing work management software</Heading>
                <Text>CoSchedule is trusted by 30,000 marketers in 100+ countries.</Text>
                
              </Box>
              
              <Box width={"100%"}  paddingTop={"4rem"}>
                  <HStack gap={"2%"} paddingLeft={"16%"} >
                    <Box height="15rem" width="25%" padding={"2%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
                      <Box>
                        <Heading fontSize={"40px"}>Gartner Magic Quadrant</Heading>
                      </Box>
                      <Box>
                        <Text>
                        The Gartner Magic Quadrant™ for Content Marketing Platforms 2022
                        </Text>
                      </Box>
                    </Box>
                    <Box height="15rem" width="25%" padding={"2%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
                    <Box paddingLeft={"30%"}>
                        <Img height="8rem" width="60%" src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Finc-5000-logo.png&w=256&q=75"/>
                      </Box>
                      <Box>
                        <Text>
                        One Of The Fastest-Growing Marketing Platforms 3 Years In a Row
                        </Text>
                      </Box>
                    </Box>
                    <Box height="15rem" width="25%"padding={"2%"}    boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
                    <Box paddingLeft={"38%"} >
                        <Img height="8rem" width="30%" src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75"/>
                      </Box>
                      <Box>
                        <Text>
                        Awarded High Performer in 7 Product Categories
                        </Text>
                      </Box>
                    </Box>
                  </HStack>
              </Box>
             
               <br/>
               <br/>
               <br/>

             <Box  width={"100%"} height="16rem" backgroundColor={"#F37e5d"}>
             <br/>
             <br/>
             <br/>
             <br/>
               <Box>
                  <Heading color={"white"}>Organize all of your marketing in one place</Heading>
               </Box>
               <br/>
               
               <Box>
                    <Button color={"#F37e5d"} backgroundColor={"white"}>Get Started Free</Button>
               </Box>
             </Box>
              
            
        
        
        

      </Box>
      

      
    );
  }
  
  export default Homepage;
  