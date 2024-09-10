package myselenium;

//win11 copilot 
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

public class SaveImageFromURLdemo {
	public static void main(String[] args) throws Exception {
		String imageUrl = "imageurl"; // Replace with your image URL
		String destinationFile = "C:\\...\\saved_image.jpg";
		BufferedInputStream in = new BufferedInputStream(new URL(imageUrl).openStream());
		FileOutputStream fileOutputStream = new FileOutputStream(destinationFile);
		{
			byte dataBuffer[] = new byte[1024];
			int bytesRead;
			while ((bytesRead = in.read(dataBuffer, 0, 1024)) != -1) {
				fileOutputStream.write(dataBuffer, 0, bytesRead);
			}
			System.out.println("Image saved successfully: " + destinationFile);
		}
	}
}
