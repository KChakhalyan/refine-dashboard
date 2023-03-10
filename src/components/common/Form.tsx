import {
   Box,
   Typography,
   FormControl,
   FormHelperText,
   TextField,
   TextareaAutosize,
   Stack,
   Select,
   MenuItem,
   Button,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
   type,
   register,
   onFinish,
   formLoading,
   handleSubmit,
   handleImageChange,
   onFinishHandler,
   propertyImage,
}: FormProps) => {
   return (
      <Box>
         <Typography fontSize={25} fontWeight={700} color="#11142d">
            {type} a Property
         </Typography>
         <Box mt={2.5} borderRadius={1} padding={4} bgcolor="#fcfcfc">
            <form
               style={{
                  marginTop: "20px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
               }}
               onSubmit={handleSubmit(onFinishHandler)}
            >
               {/* Property Name */}
               <FormControl>
                  <FormHelperText
                     sx={{ fontWeight: 500, margin: "10px 0", fontSize: 16, color: "#11142d" }}
                  >
                     Enter Property Name
                  </FormHelperText>
                  <TextField
                     id="outlined-basic"
                     fullWidth
                     required
                     color="info"
                     variant="outlined"
                     {...register("title", { required: true })}
                  />
               </FormControl>
               {/* End of textfield 'title' */}

               {/* Property Description */}
               <FormControl>
                  <FormHelperText
                     sx={{ fontWeight: 500, margin: "10px 0", fontSize: 16, color: "#11142d" }}
                  >
                     Enter Property Name
                  </FormHelperText>
                  <TextareaAutosize
                     minRows={5}
                     required
                     placeholder="Write Description"
                     color="info"
                     style={{
                        width: "100%",
                        background: "transparent",
                        fontSize: "16px",
                        borderColor: "rgba(0,0,0,0.23)",
                        padding: 10,
                        borderRadius: 6,
                        color: "#919191",
                     }}
                     {...register("description", { required: true })}
                  />
               </FormControl>
               {/* End Of textarea */}

               <Stack direction="row" gap={4}>
                  <FormControl sx={{ flex: 1 }}>
                     <FormHelperText
                        sx={{ fontWeight: 500, margin: "10px 0", fontSize: 16, color: "#11142d" }}
                     >
                        Select Property Type
                     </FormHelperText>
                     <Select
                        variant="outlined"
                        color="info"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue="apartment"
                        {...register("proprtyType", { required: true })}
                     >
                        <MenuItem value="apartment">Apartment</MenuItem>
                        <MenuItem value="villa" color="info">
                           Villa
                        </MenuItem>
                        <MenuItem value="farmhouse">Farmhouse</MenuItem>
                        <MenuItem value="condos">Condos</MenuItem>
                        <MenuItem value="townhouse">Townhouse</MenuItem>
                        <MenuItem value="duplex">Duplex</MenuItem>
                        <MenuItem value="studio">Studio</MenuItem>
                        <MenuItem value="chalet">Chalet</MenuItem>
                     </Select>
                  </FormControl>
               </Stack>
            </form>
         </Box>
      </Box>
   );
};
export default Form;
