package com.quizapp.dto.requestDto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter@Setter
public class QuestionSaveRequestDto {

    private String question;
    private String subject;
    private String questionType;

    private List<String> choices;
    private List<String> correctAnswers;
}
