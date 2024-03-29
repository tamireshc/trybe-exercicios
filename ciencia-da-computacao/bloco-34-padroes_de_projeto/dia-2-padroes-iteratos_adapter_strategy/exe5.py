from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImageApapter(PngInterface):
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def draw(self):
        print(f"Drawing {SvgImage(self.svg_path).get_image()}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


SvgImageApapter("../image.svg").draw()
PngImage("../image.png").draw()
