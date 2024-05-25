import { Button, Html, Text } from "@react-email/components";
import * as React from "react";

export default function Email({ response }: { response: any }) {
  return (
    <Html>
      <Text>Your profile created successfully</Text>
      <Button
        href={`${process.env.NEXTAUTH_URL}`}
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Check Out
      </Button>
    </Html>
  );
}
