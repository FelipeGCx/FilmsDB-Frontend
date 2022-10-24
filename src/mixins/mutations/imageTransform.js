import gql from "graphql-tag";
import base64Manager from "@/mixins/utils/base64Manager";

export default {
  mixins: [base64Manager],
  methods: {
    async transformImage(image) {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ResizeImage($imageInput: imageInput!) {
              resizeImage(imageInput: $imageInput)
            }
          `,
          variables: {
            imageInput: image,
          },
        })
        .then((result) => {
          this.base64 = result.data.resizeImage;
          this.loadImage();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async loadImage() {
      this.file = await this.base64ToFile(
        this.base64,
        `${this.filme.titleOG} (${this.filme.year})`,
        "webp"
      );
    },
  },
};
