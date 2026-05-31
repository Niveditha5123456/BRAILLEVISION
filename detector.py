from ultralytics import YOLO
import cv2

model = YOLO("models/best.pt")

def detect_braille(image_path):

    results = model(image_path)

    detected_cells = []

    for result in results:

        boxes = result.boxes

        for box in boxes:

            x1, y1, x2, y2 = map(
                int,
                box.xyxy[0]
            )

            detected_cells.append(
                (x1, y1, x2, y2)
            )

    return detected_cells