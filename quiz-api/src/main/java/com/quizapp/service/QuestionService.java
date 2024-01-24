package com.quizapp.service;

import com.quizapp.dto.requestDto.QuestionUpdateRequestDto;
import com.quizapp.entity.Question;
import com.quizapp.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final ModelMapper modelMapper;

    public Question  createQuestion(Question questionCreateRequestDto) {
        Question question = modelMapper.map(questionCreateRequestDto, Question.class);
        return questionRepository.save(question);
    }
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Optional<Question> getQuestionById(Long id) {
        return questionRepository.findById(id);
    }

    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }

    public String updateQuestion(QuestionUpdateRequestDto questionUpdateRequestDto) throws ChangeSetPersister.NotFoundException {
        Long id = questionUpdateRequestDto.getId();
        String updateQuestion = questionUpdateRequestDto.getQuestion();
        String subject = questionUpdateRequestDto.getSubject();
        String questionType = questionUpdateRequestDto.getQuestionType();

        List<String> choices = questionUpdateRequestDto.getChoices();
        List<String> correctAnswers = questionUpdateRequestDto.getCorrectAnswers();

        try {
            Optional<Question> questionById = questionRepository.findById(id);
            if (questionById.isPresent()) {
                Question question = questionById.get();
                question.setQuestion(updateQuestion);
                question.setSubject(subject);
                question.setQuestionType(questionType);
                question.setChoices(choices);
                question.setCorrectAnswers(correctAnswers);
                return("Soru Güncellenmiştir !!");
            }
            return "Bu ID'ye sahip soru bulunamamaktadır. !";
        }catch (Exception e) {
            e.printStackTrace();
            return "Bir hata ile karşılaşıldı! tekrar deneyiniz";
            }
        }

    public List<Question> getQuestionsForUser(Integer numOfQuestions, String subject) {
        Pageable pageable = PageRequest.of(0, numOfQuestions);
        return questionRepository.findBySubject(subject, pageable).getContent();
    }

    public List<String> getAllSubjects() {
        return questionRepository.findDistinctSubject();
    }
}

