from PIL import Image, ImageDraw, ImageFont

def make_icon(size, filename):
    img = Image.new("RGB", (size, size), "#1f6feb")
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default(size=int(size * 0.6))
    draw.text((size / 2, size / 2), "R", fill="white", font=font, anchor="mm")
    img.save(filename)

make_icon(192, "icon-192.png")
make_icon(512, "icon-512.png")
make_icon(180, "apple-touch-icon.png")
