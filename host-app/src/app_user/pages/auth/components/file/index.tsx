interface FileUploadProps {
  onFileUpload: (base64String: string) => void; // Callback para pasar el base64 al padre
}


const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        onFileUpload(result);    // Pasar el valor al componente padre
      };

      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
