import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Preview>Welcome onboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="text-3xl font-semibold">Hello there</Text>
            <Link
              href="http://ranjithk.vercel.app"
              style={{
                background: "#000",
                color: "#fff",
                padding: "12px 20px",
              }}
            >
              Visit My Portfolio
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
