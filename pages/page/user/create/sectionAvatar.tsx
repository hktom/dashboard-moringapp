import { Paper, Grid, Typography } from "@mui/material";
import ImageUploader from "../../../../components/imageUploader/ImageUploader";
interface IIprops {
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  image: string | undefined;
}
export const SectionAvatar = (props: IIprops) => {
  return (
    <Paper elevation={0} sx={{ mt: 2, p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={4} sx={{ pr: 5 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Avatar
          </Typography>

          <Typography variant="body2" component="p">
            The image will appear on your profile
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ImageUploader setImageField={props.setImage} image={props.image} />
        </Grid>
      </Grid>
    </Paper>
  );
};
