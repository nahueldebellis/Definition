import nltk
def noun():
    sentence = input("Enter text (in english): ")
    tokens = nltk.word_tokenize(sentence)
    tags = nltk.pos_tag(tokens)
    return tags
