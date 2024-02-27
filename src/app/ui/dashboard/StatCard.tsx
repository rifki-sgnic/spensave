import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function StatCard() {
  return (
    <Card>
      <CardBody>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </CardBody>
    </Card>
  );
}
