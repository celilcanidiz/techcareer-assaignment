package com.quizapp.controller;

import com.quizapp.dto.requestDto.QuestionCreateRequestDto;
import com.quizapp.entity.Question;
import com.quizapp.service.QuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
