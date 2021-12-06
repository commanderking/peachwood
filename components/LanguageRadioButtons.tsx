import {
  HStack,
  Box,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Language, languages } from "constants/languages";

type RadioCardProps = ReturnType<typeof useRadioGroup>["getRadioProps"] & {
  children: any;
};

function RadioCard(props: UseRadioProps & { children: React.ReactElement }) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "lightpink",
          color: "black",
          borderColor: "lightpink",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={4}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

type LanguageRadioButtonsProps = {
  setCurrentLanguage: Dispatch<SetStateAction<Language>>;
};

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function LanguageRadioButtons({
  setCurrentLanguage,
}: LanguageRadioButtonsProps) {
  const options = [languages["EN"], languages["CH"]];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "language",
    defaultValue: languages["EN"].value,
    onChange: (nextValue: Language) => {
      setCurrentLanguage(nextValue);
    },
  });

  const group = getRootProps();

  return (
    <Box display="inline-block">
      <HStack {...group}>
        {options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCard key={option.value} {...radio}>
              <Box>{option.name}</Box>
            </RadioCard>
          );
        })}
      </HStack>
    </Box>
  );
}

export default LanguageRadioButtons;
