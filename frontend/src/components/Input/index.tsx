import { Controller, Control, FieldValues } from "react-hook-form";
import {
  Typography,
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { memo, useState } from "react";
import * as Styled from "./styles";
import "react-phone-input-2/lib/style.css";
import { DEFAULT_COUNTRY } from "@/constants";

interface IProps {
  name: string;
  control: Control<FieldValues>;
  autoComplete: TextFieldProps["autoComplete"];
  placeholder: string;
  label: string;
  type: TextFieldProps["type"];
  error?: string;
  isShowIcon?: boolean;
  isPhone?: boolean;
}

function Input({
  name,
  placeholder,
  type,
  error,
  control,
  label,
  isShowIcon,
  autoComplete,
  isPhone,
}: IProps) {
  const [isShow, setIsShow] = useState(false);

  const handleIsShowToggle = () => setIsShow((prev) => !prev);

  return (
    <Styled.Wrapper>
      <Typography variant="body2">{label}</Typography>

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) =>
          isPhone ? (
            <FormControl fullWidth error={!!error}>
              <Styled.PhoneInputWrapper iserror={String(!!fieldState.error)}>
                <Styled.PhoneInput
                  country={DEFAULT_COUNTRY}
                  value={field.value || ""}
                  onChange={field.onChange}
                  inputProps={{
                    name: field.name,
                    required: true,
                    autoComplete,
                  }}
                  specialLabel=""
                />
              </Styled.PhoneInputWrapper>
              {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
          ) : (
            <TextField
              {...field}
              type={isShowIcon ? (isShow ? "text" : "password") : type}
              placeholder={placeholder}
              error={!!error}
              autoComplete={autoComplete}
              helperText={error}
              fullWidth
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
          )
        }
      />
    </Styled.Wrapper>
  );
}

export default memo(Input);
