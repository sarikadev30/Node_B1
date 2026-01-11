# MINI PROJECT => IMAGE COMPRESS APP

## BASE64

• Base64 encoding is a way to convert binary data into a text string
composed of 64 different ASCII characters.
• It is commonly used for encoding data for text-based communication
protocols.
• The encoded data can be safely transmitted over media that are designed
to deal with text.

### Why BASE64 and not binary?

101001 => 101010
Binary data can be corrupted when transmitted over systems that are not 8-
bit clean or where binary data can be misinterpreted. Base64 encoding
ensures that the data remains intact during transit by converting it to a
standard text format.

## MINI PROJECT => IMAGE COMPRESS APP

You have seen certain s/w which helps you reduce the size of the image.

Lets understand that how we actually do it ?
Steps to be followed:

1. Compress the image first.
2. Convert the compressed image to a base64 string.
3. Save the base64 string to a text file.
4. Read the base64 string from the text file.
5. Convert the base64 string back to an image.

Compressing the image first ensures that the base64 string represents the
compressed image. If you convert to base64 before compression, you will be
compressing the base64 string instead of the image, which is inefficient and
does not reduce the actual image size.

## HTTP First Server

**npm init -y** =>
This will create a package.json file in the current directory with default values.
After initializing the project, you can proceed to install dependencies and
write your project code
