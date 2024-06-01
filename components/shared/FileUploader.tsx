import { useCallback, useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import Link from "next/link";

type FileUploaderProps = {
	fieldChange: (files: File[]) => void;
	reset: boolean;
};

const FileUploader = ({ fieldChange, reset }: FileUploaderProps) => {
	const [file, setFile] = useState<File[]>([]);
	const [fileUrl, setFileUrl] = useState("");

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setFile(acceptedFiles);

			const reader = new FileReader();
			reader.onload = () => {
				const base64File = reader.result as string;
				const fileWithContent = {
					...acceptedFiles[0],
					content: base64File.split(",")[1], // remove the data URL prefix
				};
				fieldChange([fileWithContent]);
				setFileUrl(URL.createObjectURL(acceptedFiles[0]));
			};
			reader.readAsDataURL(acceptedFiles[0]);
		},
		[fieldChange]
	);

	useEffect(() => {
		if (reset) {
			setFile([]);
			setFileUrl("");
			fieldChange([]);
		}
	}, [reset, fieldChange]);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			"application/pdf": [".pdf"],
			"application/msword": [".doc"],
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document":
				[".docx"],
		},
	});

	const renderPreview = (file: File) => {
		const fileType = file.type;

		if (fileType === "application/pdf") {
			return (
				<iframe
					src={fileUrl}
					width="100%"
					height="100%"
					className="file_uploader-preview h-[400px] lg:h-[600px] w-full overflow-scroll no-scrollbar self-center"
				></iframe>
			);
		} else if (
			fileType === "application/msword" ||
			fileType ===
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
		) {
			return (
				<iframe
					src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
						fileUrl
					)}`}
					width="100%"
					height="400px"
					className="file_uploader-preview h-[400px] lg:h-[600px] w-full overflow-scroll no-scrollbar self-center"
				></iframe>
			);
		} else {
			return <p className="file_uploader-label">Unsupported file type</p>;
		}
	};

	const handleRemoveFile = () => {
		setFile([]);
		setFileUrl("");
		fieldChange([]);
	};

	return (
		<div
			{...getRootProps()}
			className="flex flex-center flex-col formInput rounded-xl cursor-pointer p-4 sm:p-6 lg:p-8"
		>
			<input {...getInputProps()} className="cursor-pointer" />

			{fileUrl ? (
				<>
					<div className="hidden lg:flex flex-1 justify-center w-full mx-auto p-2 sm:p-4 lg:p-6">
						{renderPreview(file[0])}
					</div>

					<div className="lg:hidden file_uploader-label">
						<Link href={fileUrl} target="_blank" rel="noopener noreferrer">
							{file[0].name}
						</Link>
					</div>

					<p className="file_uploader-label text-center mt-2 sm:mt-4">
						Click or drag file to replace
					</p>
					<Button
						type="button"
						onClick={handleRemoveFile}
						className="mt-4 w-44 hoverScaleEffect mx-auto text-white"
					>
						Change File
					</Button>
				</>
			) : (
				<div className="file_uploader-box text-center">
					<img
						src="/icons/file-upload.svg"
						width={48}
						height={38}
						alt="file upload"
						className="mx-auto"
					/>

					<h3 className="base-medium text-light-2 mb-2 mt-4 sm:mt-6">
						Drag file here
					</h3>
					<p className="text-light-4 small-regular mb-4 sm:mb-6">
						PDF, DOC, DOCX
					</p>

					<Button type="button" className="text-white">
						Select from computer
					</Button>
				</div>
			)}
		</div>
	);
};

export default FileUploader;
