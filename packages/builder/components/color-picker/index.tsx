import {
  Box,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { ChromePicker } from "react-color";

interface IProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: FC<IProps> = ({ color, onChange }) => {
  const [isPickerVisible, setPickerVisibility] = useState(false);

  const pickerNode = () => {
    if (!isPickerVisible) {
      return false;
    }

    return (
      <ChromePicker
        color={color}
        onChangeComplete={(color: any) => {
          onChange(color.hex);
        }}
      />
    );
  };

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <HStack spacing={4} borderWidth={1} p={1} rounded="lg">
          <Box
            as="button"
            bg={color}
            h={8}
            w={16}
            rounded="lg"
            onClick={() => setPickerVisibility(true)}
            borderWidth={1}
          />
          <Text>{color}</Text>
        </HStack>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody>{pickerNode()}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ColorPicker;
