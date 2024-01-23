package com.quizapp.controller;

import com.quizapp.dto.requestDto.QuestionCreateRequestDto;
import com.quizapp.dto.requestDto.QuestionUpdateRequestDto;
import com.quizapp.entity.Question;
import com.quizapp.service.QuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.CREATED;


@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final ModelMapper modelMapper;

    @PostMapping("/create-new-question")
    public ResponseEntity<Question> createQuestion(@Valid @RequestBody QuestionCreateRequestDto questionCreateRequestDto){
        Question question = modelMapper.map(questionCreateRequestDto, Question.class);
        Question createdQuestion = questionService.createQuestion(question);
        return ResponseEntity.status(CREATED).body(createdQuestion);
    }

    @GetMapping("/all-questions")
    public ResponseEntity<List<Question>> getAllQuestions(){
        List<Question> questions = questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/question/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable Long id) throws ChangeSetPersister.NotFoundException {
        Optional<Question> theQuestion = questionService.getQuestionById(id);
        if (theQuestion.isPresent()){
            return ResponseEntity.ok(theQuestion.get());
        }else {
            throw new ChangeSetPersister.NotFoundException();
        }
    }

    @PutMapping("/question/{id}/update")
    public ResponseEntity<String> updateQuestion(
            @PathVariable Long id, @RequestBody QuestionUpdateRequestDto questionUpdateRequestDto) throws ChangeSetPersister.NotFoundException {
        String updatedQuestion = questionService.updateQuestion(questionUpdateRequestDto);
        return ResponseEntity.ok(updatedQuestion);
    }
}
