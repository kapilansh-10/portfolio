"use client";

import { useEffect, useState } from "react";

interface AgeCounterProps {
  birthDate: string;
}

export default function AgeCounter({ birthDate }: AgeCounterProps) {
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const birth = new Date(birthDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = now - birth;
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears);
    }, 50);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <span className="text-muted-foreground">
      been here for {age.toFixed(9)} years
    </span>
  );
}
