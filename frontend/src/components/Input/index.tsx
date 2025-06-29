"use client";

import {
  Typography,
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { memo, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Styled from "./styles";

interface IProps<T extends FieldValues> {
  name: Path<T>;
  placeholder: string;
  label: string;
  type: TextFieldProps["type"];
  register: UseFormRegister<FieldValues>;
  error?: string;
  isShowIcon?: boolean;
}

function Input<T extends FieldValues>({
  name,
  placeholder,
  type,
  error,
  register,
  label,
  isShowIcon,
}: IProps<T>) {
  const [isShow, setIsShow] = useState(false);

  const handleIsShowToggle = () => setIsShow((prev) => !prev);

  return (
    <Styled.Wrapper>
      <Typography variant="body2">{label}</Typography>

      <TextField
        type={isShowIcon ? (isShow ? "text" : "password") : type}
        placeholder={placeholder}
        error={!!error}
        helperText={error}
        {...register(name)}
        slotProps={{
          input: {
            endAdornment: isShowIcon ? (
              <InputAdornment position="end">
                <IconButton onClick={handleIsShowToggle} edge="end">
                  {isShow ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ) : undefined,
          },
        }}
      />
    </Styled.Wrapper>
  );
}

export default memo(Input);
