import nltk
def synonyms():
    word = input("Enter word: ")
    synonyms = nltk.corpus.wordnet.synsets(word)
    return synonyms
