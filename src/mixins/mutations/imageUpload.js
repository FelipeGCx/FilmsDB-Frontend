import { app } from "@/utils/firebaseConfig";
export default {
  methods: {
    async uploadImage(filename, file) {
      // create a storage ref
      const storageRef = app.storage().ref();
      // create a child ref (define the path and set the name of the file, in this case => "movieTitle (movieYear)")
      const filePath = storageRef.child(`/assets/${filename}`);
      // upload the file
      await filePath.put(file);
      // get the url of the file for save it in the database
      return await filePath.getDownloadURL();
    },
  },
};
