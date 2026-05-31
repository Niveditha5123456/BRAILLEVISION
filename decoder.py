from braille_map import BRAILLE_MAP

def decode_pattern(pattern):

    return BRAILLE_MAP.get(
        pattern,
        "?"
    )