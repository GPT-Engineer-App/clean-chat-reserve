import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, useToast, Image } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaComment } from "react-icons/fa";

const Index = () => {
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [step, setStep] = useState(1);
  const toast = useToast();

  const handleLogin = () => {
    // TODO: 전화번호 인증 및 로그인 로직 구현
    toast({
      title: "로그인 되었습니다.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setStep(2);
  };

  const handleBooking = () => {
    // TODO: 대화형 상담 및 예약 로직 구현
    toast({
      title: "예약이 완료되었습니다.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        청소 서비스 예약
      </Heading>

      {step === 1 && (
        <Stack spacing={4}>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="전화번호" />
          <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="위치" />
          <Button onClick={handleLogin} colorScheme="blue">
            로그인
          </Button>
        </Stack>
      )}

      {step === 2 && (
        <Box textAlign="center">
          <Text mb={4}>
            <FaMapMarkerAlt /> {location}에서 청소 서비스를 예약하시겠어요?
          </Text>
          <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTcxMjgyMzc4Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="청소 서비스" mb={4} />
          <Button onClick={handleBooking} leftIcon={<FaComment />} colorScheme="green" size="lg">
            대화로 예약하기
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Index;
